import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();

const CreateTaskScreen = () => {
  const [task, setTask] = useState('');
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    if (editTask !== null) {
      setTask(editTask.description);
    } else {
      setTask('');
    }
  }, [editTask]);

  const handleCreateTask = async () => {
    if (editTask !== null) {
      // Atualizar a tarefa existente
      await firestore().collection('tasks').doc(editTask.id).update({ description: task });
      console.log('Tarefa editada:', editTask.id, task);
      setEditTask(null);
    } else {
      // Criar uma nova tarefa
      await firestore().collection('tasks').add({ description: task });
      console.log('Nova tarefa:', task);
    }
    setTask('');
  };

  const handleEditTask = (selectedTask) => {
    setEditTask(selectedTask);
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
