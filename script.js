function startDownload() {
  // رابط البرنامج (يمكن تغييره حسب الملف الفعلي)
  const fileUrl = 'https://example.com/your-software.exe';

  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  alert('Download started!'); // رسالة للمستخدم
}
