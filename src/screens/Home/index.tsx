import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home(){
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
           return Alert.alert("Participante já existe", "Um participante com mesmo nome já está na lista")
        }

        setParticipants(prevState => [...prevState, 'Ana']);
        setParticipantName('');
      }

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
  return (
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