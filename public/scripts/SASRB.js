// search algorithm solution propsed by Rayen BRH

// 1 - declare the objects for search keywords
const teams_names = [
    {0 :"as marsa"},
    {1 :"marsa"},
    {2 :"gnawia"},
    {3 :"est" },
    {4 :"taraji" },
    {5 :"esperence" },
    {6 :"ca" },
    {7 :"club" },
    {8 :"club africa" },
    {9 :"css" },
    {10 :"sahli" },
    {11 :"etoile" },
    {12 :"ess" },
    {13 :"ben gerdane" }
]

const relationnel_id_with_teams_names = [
    {0 : "as_marsa"},
    {1 : "as_marsa"},
    {2 : "as_marsa"},
    {3 : "est"},
    {4 : "est"},
    {5 : "est"},
    {6 : "ca"},
    {7 : "ca"},
    {8 : "ca"},
    {11 :"ess" },
    {12 :"ess" },
    {13 :"ben_gerdane" } 
];

console.log(teams_names.length + " search params")
let compare_result = [teams_names.length];

//identifiy the input search keyword 
const keyword = document.getElementById('localword').innerHTML
console.log(keyword)


// the most inportant part
        // compare this.keyword with the objects list
            for(var i = 0 ; i < teams_names.length ; i++){
                var team_name = teams_names[i][i];
                if(team_name == keyword){
                    compare_result[i] = true
                    document.getElementById('TSH').style.display = "none"
                    document.getElementById('not_found').style.display = "none"
                }
                else(
                    compare_result[i] = false
                )
            }
            console.log(compare_result);
        // for upgrading in the next version with coefficent !!!!!!!!!!!!!!!!!!!!!!!


// finall step is rendering the elements 

for(var j=0; j < relationnel_id_with_teams_names.length ;j++){
if(compare_result[j] == true){
    console.log(relationnel_id_with_teams_names[j][j])
    function creat_store_element(){
    let div = document.createElement('div');
    div.innerHTML = '<div class="equipe" id = " '+ relationnel_id_with_teams_names[j][j] +' "><div ><img src="/media/imgs/'+ relationnel_id_with_teams_names[j][j] +'.png" alt="equipe"></div><p> '+ relationnel_id_with_teams_names[j][j] +' </p></div>'
    return div
    }
    const to_render_content = document.getElementById("equipes_searched")
    to_render_content.appendChild(creat_store_element())
}
else{

}
}