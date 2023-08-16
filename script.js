//mine

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Select video to play in pip
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (error) {
        alert('Error playing video');
        console.log(error);
    }
}

button.addEventListener('click', async ()=>{
    //Disable btn
    button.disabled = true;
    // start pip
    await videoElement.requestPictureInPicture();
    //Reset btn
    button.disabled = false;
});

selectMediaStream();