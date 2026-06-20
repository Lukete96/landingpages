// VKLD landing — page assembly
function App() {
  return (
    <React.Fragment>
      <window.Header />
      <main>
        <window.Hero />
        <window.Procedimentos />
        <window.Tecnicas />
        <window.Valores />
        <window.Agendamento />
      </main>
      <window.Footer />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
