import { styles } from './styles'; // imports ts with styles
import { Participant } from '../../components/Participant'; // imports participant (button)
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'; // basic necessities for the code
import { useState } from "react"; // importing use state hook for the update of the participant name and array in the code

export function Home(){
    const [participants, setParticipants] = useState<string[]>([]); // useState to set the participants array
    const [participantName, setParticipantName] = useState(''); // useState to set the participant's name inside the array

    /* handling participant add ( after click on add button ), 
    checking repetition and setting new participant,
    and setting then the new array */
    function handleParticipantAdd() {
        if(participants.includes(participantName)){
           return Alert.alert("Participante já existe", "Um participante com mesmo nome já está na lista")
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
      }

    /* handling participant remove ( after click on remove button ), 
    giving alert to user */
    function handleParticipantRemove(name: string){
        Alert.alert("Remover Participante", `Remover ${name}?`,[
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ]);
    }

    // start of home code
  return (
    /* title and date on the top, 
    text input box below with a add button besides and 
    an flatlist displaying our participants array */
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do Evento
        </Text>
        <Text style={styles.eventDate}>
            Sexta, 24 de Maio de 2024
        </Text>

        <View style={styles.form} >
        <TextInput 
        style={styles.input} 
        placeholder='Nome do participante'
        placeholderTextColor="#6B6B6B"
        onChangeText={setParticipantName}
        value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
            +
            </Text>
        </TouchableOpacity>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
             <Participant 
                key={item}
                name={item}
                onRemove={() => handleParticipantRemove(item)} 
             />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.emptyListText}>
                    Certeza que ninguém vai no evento? Adicione participantes a lista de presença.
                </Text>
            )}
        />
    </View>
  )
}