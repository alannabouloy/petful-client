import React, { Component } from "react";
import AdoptionSection from "../../components/AdoptionSection/AdoptionSection";
import Header from "../../components/Header/Header";
import Queue from "../../components/Queue/Queue";
import ApiService from "../../services/api-service";
import helper from "../../helper";
import './AdoptionPage.css'

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
    ApiService.getPeople()
      .then((res) => {
        const people = res;
        this.setState({ people });
        this.checkUser()
      })
      .then(() => {
          ApiService.getPets()
          .then(res => {
              const pets = res
              this.setState({pets})
          })
          .then(() => this.timedDequeue());
      })
      
  }
  handleJoinQueue = () => {
    this.enqueuePerson(this.state.user).then(() => {
      this.timedEnqueue();
    });
  };

  handlePetAdoption = (petType) => {
    if (!petType) {
      petType = helper.generatePet();
    }
    if (this.state.people.length === 0) {
      return;
    }
    if (petType === "both") {
      ApiService.dequeuePerson().then(res => {
          const person = res
          ApiService.getPeople()
            .then((res) => {
                const people = res;
                this.setState({ people });
          })
            .then(() => {
              ApiService.getPets()
                .then(res => {
                    const pets = res
                    this.setState({pets})
                })
                .then(() => {
                    ApiService.dequeuePet("cat").then((res) => {
                      const cat = res;
                      ApiService.dequeuePet("dog").then((res) => {
                        const dog = res;
                        const message = `Yay! ${person.name} has adopted ${cat.name} and ${dog.name}!`;
                        this.setState({message})
                        this.setState({adopting: true})
                        this.checkUser()
                      })
                      .then(this.timedDequeue())
                    });
                  })
                  
                })
          }) 
    } else{
        ApiService.dequeuePerson().then((res) => {
            const person = res;
            ApiService.getPeople()
              .then((res) => {
                const people = res;
                this.setState({ people });
              })
              .then(() => {
                  ApiService.getPets()
                  .then(res => {
                      const pets = res
                      this.setState({pets})
                  })
                  .then(() => {
                      ApiService.dequeuePet(petType).then((res) => {
                        const pet = res;
                        const message = `Yay! ${person.name} has adopted ${pet.name}!`;
                        this.setState({message})
                        this.setState({adopting: true})
                        this.checkUser()
                      })
                      .then(this.timedDequeue());
                    })
                    
              }) 
          });
    }
  };

  enqueuePerson = (person) => {
    if (person) {
      ApiService.enqueuePerson(person).then((res) => {
        const people = res;
        this.setState({ people }) 
      })
      .then(() => this.timedEnqueue())
    } else {
      ApiService.enqueuePerson().then((res) => {
        const people = res;
        this.setState({ people });
      })
      .then(() => this.timedEnqueue())
    }
  };

  timedEnqueue = () => {
    const userIndex = this.state.people.findIndex(
      (person) => person.user === true
    );
    if(userIndex < 0){
        this.timedDequeue()
        return
    }   //check if 5 people in queue behind user
    const behindUser = this.state.people.slice(
        userIndex + 1,
        this.state.people.length
      );
    if (behindUser.length >= 5) {
        //returns if true
        return;
      }
      setTimeout(() => {
          this.enqueuePerson()
      }, 5000);
  };

  timedDequeue = () => {
    this.setState({adopting: false})
    ApiService.getPeople().then(res => {
        const people = res
        this.setState({people})

        if (this.state.people.length === 0) {
            return;
          }
      
          if (this.state.people[0].user) {
            return;
          }
      
  
          setTimeout(() => {
              this.handlePetAdoption()
          }, 5000);
    })
    
  };

  getTopOfQueue = () => {
    if (this.state.people.length > 0) {
      return this.state.people[0].name;
    }
    return null;
  };

  addUser = name => {
      const user = {
          name: name,
          user: true
      }
      this.setState({user})
      this.enqueuePerson(user) 
  }

  checkUser = () => {
      const userIndex = this.state.people.findIndex(person => person.user)
      if(userIndex >= 0){
          const user = this.state.people[userIndex]
          this.setState({user})
      }
      else{
          this.setState({user: { }})
      }
  }

  render() {
    let topOfQueue = this.getTopOfQueue();
    return (
      <div className='adoption-page'>
        <Header />
        <AdoptionSection
          pets={this.state.pets}
          name={topOfQueue}
          adopting={this.state.adopting}
          message={this.state.message}
          user={this.state.user}
          handleAdopt={this.handlePetAdoption}
        />
        <Queue people={this.state.people} addUser={this.addUser} />
      </div>
    );
  }
}
