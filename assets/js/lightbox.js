document.querySelectorAll(".thumb").forEach((thing)=> 
{
    console.log(thing);

    thing.addEventListener('click', ( )=> 
    {
        const largeimage = thing.getAttribute('data-img');
        document.querySelector('#largeImage > img').setAttribute('src', largeimage);
        document.querySelector('#largeImage').style.display = 'flex';
        document.querySelector('#x').style.display = 'flex';
    });
});
function close()
{
    document.querySelector('#largeImage').style.display = 'none';
    document.querySelector('#x').style.display = 'none';
}

document.querySelector('#x').addEventListener('click', close);