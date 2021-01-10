import React, { Component } from "react";
import AdoptionSection from "../../components/AdoptionSection/AdoptionSection";
import Header from "../../components/Header/Header";
import Queue from "../../components/Queue/Queue";
import ApiService from "../../services/api-service";
import helper from "../../helper";

export default class AdoptionPage extends Component {
  state = {
    people: [],
    pets: {
      cat: {},
      dog: {},
    },
    userInQueue: false,
    adopting: false,
    user: {},
    message: ''
  };
  componentDidMount() {
      console.log('mounted')
    ApiService.getPeople()
      .then((res) => {
        const people = res;
        this.setState({ people });
      })
      .then(() => this.timedDequeue());
  }
  handleJoinQueue = () => {
    this.enqueuePerson(this.state.user).then(() => {
      this.timedEnqueue();
    });
  };

  handlePetAdoption = (petType) => {
    if (!petType) {
      petType = helper.generatePet();
      console.log("pet type is", petType);
    }
    if (this.state.people.length === 0) {
      return;
    }
    if (petType === "both") {
      ApiService.dequeuePerson()
        .then((res) => {
          ApiService.getPeople().then((res) => {
            const people = res;
            this.setState({ people });
          });
          return res;
        })
        .then((res) => {
          const person = res;
          ApiService.dequeuePet("cat").then((res) => {
            const cat = res;
            ApiService.dequeuePet("dog").then((res) => {
              const dog = res;
              return `Yay! ${person.name} has adopted ${cat.name} and ${dog.name}!`;
            });
          });
        });

      //.then(this.timedDequeue())
    }
    ApiService.dequeuePerson().then((res) => {
      const person = res;
      ApiService.getPeople()
        .then((res) => {
          const people = res;
          this.setState({ people });
        })
        .then(() => {
          console.log("person is", person);
          ApiService.dequeuePet(petType).then((res) => {
            const pet = res;
            const message = `Yay! ${person.name} has adopted ${pet.name}!`;
            this.setState({message})
            this.setState({adopting: true})
          });
        })
        .then(this.timedDequeue());
    });

    //
  };

  enqueuePerson = (person) => {
    if (person) {
      ApiService.enqueuePerson(person).then((res) => {
        const people = res;
        this.setState({ people });
      });
    } else {
      ApiService.enqueuePerson().then((res) => {
        const people = res;
        this.setState({ people });
      });
    }
  };

  timedEnqueue = () => {
    const userIndex = this.state.people.findIndex(
      (person) => person.user === true
    );
    const behindUser = this.state.people.slice(
      userIndex,
      this.state.people.length
    );
    //check if 5 people in queue behind user
    if (behindUser.length >= 5) {
      //returns if true
      return;
    }
    setTimeout(this.enqueuePerson(), 10000);
    this.timedEnqueue();
  };

  timedDequeue = () => {
    this.setState({adopting: false})
    if (this.state.people.length === 0) {
      console.log("queue is empty");
      return;
    }

    if (this.state.people[0].user) {
      console.log("user is up");
      return;
    }

    console.log("running");
    setTimeout(() => {
        this.handlePetAdoption()
    }, 5000);
  };

  getTopOfQueue = () => {
    if (this.state.people.length > 0) {
      return this.state.people[0].name;
    }
    return null;
  };

  render() {
    let topOfQueue = this.getTopOfQueue();
    return (
      <div>
        <Header />
        <AdoptionSection
          pets={this.state.pets}
          name={topOfQueue}
          adopting={this.state.adopting}
          message={this.state.message}
        />
        <Queue people={this.state.people} />
      </div>
    );
  }
}
