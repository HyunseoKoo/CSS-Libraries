function App() {
  return (
    <div className="App">
      <nav className="bg-gray-800 p-3 flex justify-start">
        <img src="/이미지.jpg" alt="이미지" className="w-10 px-1"/>
        <p className="text-gray-300 p-3">메뉴1</p>
        <p className="text-gray-300 p-3">메뉴2</p>
        <p className="text-gray-300 p-3">메뉴3</p>
      </nav>
      <div className="p-3">
        <input className="p-2 border border-gray-300 rounded-md"
        placeholder="Email" />
        <button className="py-2 px-4 rounded-md text-white bg-indigo-600">Sign in</button>
      </div>
    </div>
  );
}

export default App;
