window.onscroll = () => scrolling();



const scrolling = () => {

    const videoClass = document.getElementById('lg-video').classList;
    const footer = document.getElementById('footer').classList;

    if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)) {
        videoClass.remove('extended-iframe');
        videoClass.add('minified-iframe');
    } else {
        videoClass.add('extended-iframe');
        videoClass.remove('minified-iframe');

    }

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        footer.add('fixFooter');
    }else {
        footer.remove('fixFooter');
    }
}