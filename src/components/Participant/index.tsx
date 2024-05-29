import { View, Text, TouchableOpacity } from 'react-native'; // basic necessities for the code
import { styles } from './styles' // importing participants components style

// setting types for the name and onRemove variables
type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant( { name, onRemove }: Props ){
    return(
        // displays name and button on side to remove
        <View style={styles.container} >
            <Text style={styles.name} >
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove} >
            <Text style={styles.buttonText}>
            -
            </Text>
        </TouchableOpacity>
        </View> 
    )
}