function loadProfileData() {
    const name = localStorage.getItem('name') || 'Nama Anda';
    const role = localStorage.getItem('role') || 'Front End Designer';
    const availability = localStorage.getItem('availability') || 'Full Time';
    const age = localStorage.getItem('age') || '19';
    const location = localStorage.getItem('location') || 'Jakarta';
    const yoe = localStorage.getItem('yoe') || '2';
    const email = localStorage.getItem('email') || 'email@gmail.com';

    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-role').innerText = role;
    document.getElementById('profile-availability').innerText = availability;
    document.getElementById('profile-age').innerText = age;
    document.getElementById('profile-location').innerText = location;
    document.getElementById('profile-yoe').innerText = yoe;
    document.getElementById('profile-email').innerText = email;
}

function showEditForm() {
    document.querySelector('.form-section').style.display = 'block';

    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('role').value = localStorage.getItem('role') || '';
    document.getElementById('availability').value = localStorage.getItem('availability') || '';
    document.getElementById('age').value = localStorage.getItem('age') || '';
    document.getElementById('location').value = localStorage.getItem('location') || '';
    document.getElementById('yoe').value = localStorage.getItem('yoe') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
}

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('role', document.getElementById('role').value);
    localStorage.setItem('availability', document.getElementById('availability').value);
    localStorage.setItem('age', document.getElementById('age').value);
    localStorage.setItem('location', document.getElementById('location').value);
    localStorage.setItem('yoe', document.getElementById('yoe').value);
    localStorage.setItem('email', document.getElementById('email').value);

    document.querySelector('.form-section').style.display = 'none';

    loadProfileData();
});

document.getElementById('edit-btn').addEventListener('click', showEditForm);

loadProfileData();
