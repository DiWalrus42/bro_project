// id of the project will be used for the link and thumbnail
// date format to be used dd-mm-yyyy
// currently using hotpot.ai to generate thumbnails

function create_projects(){
    const _prj_data = {
        items: [
            {
                'id': 'ceasar-cipher',
                'title': 'Ceaser Cipher',
                'description' : 'to be determined later',
                'author': 'Hansley Sowadoo',
                'date-added': '17-02-2024',
            }
        ]
    };
    
    // retrieve the container for the projects
    const _container = document.getElementById('project_section');
    
    //loop through the projects
    _prj_data.items.forEach(function(item) {

        // create the card for the project
        const _project_card = document.createElement('div');
        _project_card.classList.add('project_div');
        
        // create link for the project
        const _project_link = document.createElement('a');
        _project_link.href = 'projects/' + item.id + '.html';

        //create container for the title and description
        const _description_container = document.createElement('div');
        _description_container.classList.add('description_container');
    
        // create the element for the title of the project
        const _project_thumbnail = document.createElement('img');
        _project_thumbnail.src = '../src/images/' + item.id + '.png';
    
        // create the element for the title of the project
        const _project_name = document.createElement('p');
        _project_name.classList.add('project_name');
        _project_name.textContent = item.title;
    
        //create the element for the description of the project
        const _project_desc = document.createElement('p');
        _project_desc.classList.add('project_desc');
        _project_desc.textContent = item.description;
        
        _project_card.appendChild(_project_link);
        _project_link.appendChild(_project_thumbnail);
        _description_container.appendChild(_project_name);
        _description_container.appendChild(_project_desc);
        _project_link.appendChild(_description_container);
        _container.appendChild(_project_card)
    
    });
}