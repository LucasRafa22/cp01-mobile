import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [cursoAluno, setCursoAluno] = useState('');
  const [disciplinaAluno, setDisciplinaAluno] = useState('');
  const [descricaoAluno, setDescricaoAluno] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);

  const atualizarCampo = (setter, valor) => {
    setter(valor);
    setMostrarDados(false);
  };

  useEffect(() => {
  console.log("Aplicativo iniciado!");
}, []);


  const formularioValido = nomeAluno && cursoAluno && disciplinaAluno && descricaoAluno;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Registo Académico</Text>
        
        <View style={styles.form}>
          <TextInput 
            placeholder='Nome do Aluno' 
            value={nomeAluno} 
            onChangeText={(v) => atualizarCampo(setNomeAluno, v)} 
            style={styles.input}
          />
          
          <TextInput 
            placeholder='Curso' 
            value={cursoAluno} 
            onChangeText={(v) => atualizarCampo(setCursoAluno, v)} 
            style={styles.input}
          />

          <TextInput 
            placeholder='Disciplina' 
            value={disciplinaAluno} 
            onChangeText={(v) => atualizarCampo(setDisciplinaAluno, v)} 
            style={styles.input}
          />

          <TextInput 
            placeholder='Descrição' 
            value={descricaoAluno} 
            multiline
            onChangeText={(v) => atualizarCampo(setDescricaoAluno, v)} 
            style={[styles.input, styles.textArea]}
          />

          <View style={styles.buttonWrapper}>
            <Button 
            title='Confirmar Dados' 
            color={formularioValido ? '#003366' : '#A9A9A9'} 
            onPress={() => setMostrarDados(true)}
            disabled={!formularioValido} 
            />
          </View>


        </View>

        {mostrarDados && (
          <RenderizarDados 
            nome={nomeAluno} 
            curso={cursoAluno} 
            disciplina={disciplinaAluno} 
            descricao={descricaoAluno} 
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },
  content: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#2c3e50' 
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#bdc3c7',
    marginBottom: 20, 
    padding: 10,
    fontSize: 16
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top'
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden'
  }
});
