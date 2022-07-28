import "./App.css";
import Profile from "./Profile/Profil";



function App() {
  const handleName = (name) => alert(name);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "10px",
          padding: "15px",

        }}
      >
        
        <Profile
          fullName={"Laatiri Afef"}
          profession={"Landscape Architecture"}
          bio="A Landscape Architecture is the study and practice of designing environments (outdoors & indoors) of varying scale that encompasses elements of art, environment, architecture, engineering, and sociology "
          handleName={handleName}
          
        >
          <img
            src="https://th.bing.com/th/id/R.a65e6ffc545891c15877f18ab2b640a0?rik=N0PnclAK5VJDBQ&riu=http%3a%2f%2fwww.lespaysagistesfrancais.fr%2fwp-content%2fuploads%2f2014%2f09%2fdessin-paysagisme1.jpg&ehk=tgk4gsdFdoQJ1hkyOaRq7WXDA1AEESl7r0fNzfhKudc%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            style={{ borderRadius: "50%", width: "150px",height: "150px"}}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;