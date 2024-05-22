import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'

import { Participant } from '../../components/Participant';

export function Home(){
    const participants = ['Vitor Rodrigues', 'Toni', 'Luka', 'Guler', 'Rodrigo', 'Vini', 'Jude']

    function handleParticipantAdd() {
        if(participants.includes("Vitor Rodrigues")){
           return Alert.alert("Participante já existe", "Um participante com mesmo nome já está na lista")
        }
      }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover Participante", `Remover ${name}?`,[
            {
                text: "Sim",
                onPress: () => Alert.alert("Removido")
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ] )
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
        placeholderTextColor={"#6B6B6B"}
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