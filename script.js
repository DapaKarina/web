document.querySelector('.login-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah form submit
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    // Reset error state
    usernameInput.classList.remove('error');
    passwordInput.classList.remove('error');
    document.querySelector('.error-message').innerText = ''; // Kosongkan pesan error
  
    // Validasi input
    if (username === '' || password === '') {
      if (username === '') {
        usernameInput.classList.add('error'); // Getarkan input username
      }
      if (password === '') {
        passwordInput.classList.add('error'); // Getarkan input password
      }
      document.querySelector('.error-message').innerText = 'Semua kolom harus diisi!';
    } else if (username !== '123' || password !== '123') {
      usernameInput.classList.add('error');
      passwordInput.classList.add('error');
      document.querySelector('.error-message').innerText = 'Username atau password salah!';
    } else {
      // Langsung arahkan ke halaman berikutnya tanpa alert
      window.location.href = 'dashboard.html';
    }
  
    // Hapus kelas error setelah animasi selesai
    setTimeout(() => {
      usernameInput.classList.remove('error');
      passwordInput.classList.remove('error');
    }, 300);
});
// Event listener untuk mendeteksi scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.welcome-container');
    const scrollY = window.scrollY;
  
    // Jika posisi scroll lebih dari 50px, tambahkan kelas shrink
    if (scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });