function selectCourse(name, price) {
    if(!currentUser) {
        document.getElementById('authButtons').style.display = 'flex';
        return;
    }
    showCourseDetails(name, price);
}
