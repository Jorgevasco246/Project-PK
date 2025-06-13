

function createTeamMemberElement(member) {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'team-member';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'team-member-content';
    

    const avatar = document.createElement('div');
    avatar.className = 'team-member-avatar';
    
    if (member.image) {
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.className = 'team-member-photo';
        
        img.onerror = function() {
            avatar.innerHTML = '';
            avatar.textContent = member.avatar;
            avatar.classList.add('avatar-fallback');
        };
        
        avatar.appendChild(img);
    } else {
        avatar.textContent = member.avatar;
        avatar.classList.add('avatar-fallback');
    }
    
    const name = document.createElement('h3');
    name.textContent = member.name;
    
    const role = document.createElement('div');
    role.className = 'team-member-role';
    role.textContent = member.role;
    
    const bio = document.createElement('p');
    bio.className = 'team-member-bio';
    bio.textContent = member.bio;
    
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'team-member-skills';
    
    member.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
    
    contentDiv.appendChild(avatar);
    contentDiv.appendChild(name);
    contentDiv.appendChild(role);
    contentDiv.appendChild(bio);
    contentDiv.appendChild(skillsContainer);
    
    memberDiv.appendChild(contentDiv);
    
    return memberDiv;
}
 
function renderTeamMembers() {
    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = '';
    
    teamMembers.forEach(member => {
        const memberElement = createTeamMemberElement(member);
        teamContainer.appendChild(memberElement);
    });
}

document.addEventListener('DOMContentLoaded', renderTeamMembers);