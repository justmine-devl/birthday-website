// Lấy các phần tử từ DOM
const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const giftSelection = document.getElementById('giftSelection');
const selectedGift = document.getElementById('selectedGift');
const birthdaySong = document.getElementById('birthdaySong');

// Tên người được chúc
const recipientName = "Trang Dương";

// Sự kiện click vào hộp quà
giftBox.addEventListener('click', function() {
    // Hiển thị thông điệp chúc mừng
    message.innerHTML = `Happy Birthday, ${recipientName}! 🎉🎂`;
    message.style.display = 'block';

    // Phát nhạc sinh nhật
    birthdaySong.play();

    // Hiển thị lựa chọn quà tặng
    giftSelection.style.display = 'block';

    // Ẩn hộp quà sau khi mở
    giftBox.style.display = 'none';
});

// Sự kiện chọn quà
document.querySelectorAll('.gift-option').forEach(button => {
    button.addEventListener('click', function() {
        const selectedGiftType = this.getAttribute('data-gift');

        // Hiển thị hình ảnh quà tặng dựa trên lựa chọn
        let giftImage = '';
        if (selectedGiftType === 'cake') {
            giftImage = 'https://github.com/justmine-devl/birthday-website/blob/main/ko.png'; // Đường dẫn ảnh bánh
        } else if (selectedGiftType === 'balloon') {
            giftImage = 'https://github.com/justmine-devl/birthday-website/blob/main/kol.png'; // Đường dẫn ảnh bóng bay
        }

        selectedGift.innerHTML = `<img src="${giftImage}" alt="${selectedGiftType}">`;

        // Ẩn phần lựa chọn quà sau khi đã chọn
        giftSelection.style.display = 'none';
    });
});
