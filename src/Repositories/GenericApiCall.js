import SkillsView from "../Views/Skills/skillsView";
import apiUrl from "../Misc/apiUrl.json"
async function getDataFromAPI(endpoint){
    return await fetch(`${apiUrl["URL"]}${endpoint}`)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch(console.log)
}

export default getDataFromAPI;