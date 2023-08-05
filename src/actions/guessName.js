import { Text, Document } from '@botonic/react'
import React from 'react'
import lasvegas from '../assets/lasvegas.png'
import { webchat } from '../webchat/index'
import invitation from '../assets/invitation.png'

export default class extends React.Component {
  static async botonicInit({ input, session }) {
    const namesFound = session.user.extra_data.namesFound;
    const nameInput = input.entities["name"];
    return { namesFound, nameInput }
  }

  /*
Tableau avec les valeurs de chaque nom, pour référence
Tableau des noms déjà trouvés
Si utilisateur trouve un nom parmi les cinq
on vérifie si le nom n'est pas déjà dans le tableau des noms trouvés
sinon, on l'ajoute dans le tableau en question
quand tableau plein : message avec invitation
Ferdinand = c'est gagné
*/

namesList() {
  var namesList = this.props.namesFound.map(function(name){
    return <Text>{name}</Text>;
  })
  return namesList;
}

  render() {
    if (this.props.namesFound.length == 5){
      if (this.props.nameInput.toLowerCase() == "ferdinand"){
        return <Text>Congrats !!! The final name to find was indeed {this.props.nameInput} ! You won the game ! </Text>;
      } else {
        return <Text>Sorry, the final name to find is not {this.props.nameInput}</Text>;
      }
    }
    else {
      if (!this.props.namesFound.includes(this.props.nameInput.toLowerCase())){
        this.props.namesFound.push(this.props.nameInput.toLowerCase());
  
        if (this.props.namesFound.length == 5){
          return(
            <>
            <Text>Well done, you foud the five names ! Now you should be able to figure out the name that rule them all :</Text>
            <Document src={invitation} />
          </>
          )  
        } else {
          var namesList = this.namesList();
          return (
            <>
              <Text>Well done !</Text>
              <Text>You found one more name ! Here's the list of names you've already found :</Text>
              { namesList }            
            </>
          )    
        }
      } else {
        var namesList = this.namesList();
        return(
        <>
        <Text>Here's the list of names you've already found :</Text>
        { namesList }            
      </>
        )
      }  
    }
  }
}
