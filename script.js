
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  function changeColor() {
    const colors = ['#e0f7fa', '#f1f8e9', '#fff3e0', '#fce4ec', '#ede7f6'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      document.getElementById('formMessage').textContent = 'Please fill in all fields.';
      return;
    }
  
    document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent.';
    this.reset();
  });
  