import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();

const CreateTaskScreen = () => {
  const [task, setTask] = useState('');
  const [editTask, setEditTask] = useState(null);

  const handleCreateTask = async () => {
    if (editTask !== null) {
      // Lógica para editar a tarefa
      console.log('Tarefa editada:', editTask.id, task);
      // Limpar o campo de entrada e o estado de edição
      setTask('');
      setEditTask(null);
    } else {
      // Criar a nova tarefa no Firebase Firestore
      try {
        const docRef = await firestore().collection('tasks').add({ description: task });
        console.log('Nova tarefa adicionada:', docRef.id, task);
      } catch (error) {
        console.error('Erro ao adicionar a nova tarefa:', error);
      }
      // Limpar o campo de entrada
      setTask('');
    }
  };

  const handleEditTask = (selectedTask) => {
    setEditTask(selectedTask);
    setTask(selectedTask.description);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={text => setTask(text)}
        style={{ marginBottom: 8, padding: 8, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button
        title={editTask !== null ? 'Editar Tarefa' : 'Criar Tarefa'}
        onPress={handleCreateTask}
      />
    </View>
  );
};

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateTask" component={CreateTaskScreen} options={{ title: 'Criar Tarefa' }} />
    </Stack.Navigator>
  );
};

export default App;
