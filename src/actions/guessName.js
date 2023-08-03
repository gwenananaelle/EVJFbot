import { Text, Document } from '@botonic/react'
import React from 'react'
import lasvegas from '../assets/lasvegas.png'
import { webchat } from '../webchat/index'

export default class extends React.Component {
  static async botonicInit({ input, session }) {
    const names = session.user.extra_data.namesFound;
    return { names }
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

}
