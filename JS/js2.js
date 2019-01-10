const fill = document.querySelector('.Fill');
const empties = document.querySelectorAll('.empty');

//fill listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

//loop through empties and call drag events
for(const empty of empties) 
{
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragnter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

//drag functions
function dragStart()
{
    this.className +=' hold';
    setTimeout(() => (this.className = 'invisible'),0);
}

function dragEnd()
{
    this.className = 'Fill';
}

function dragOver(e)
{
    e.preventDefault();
}
function dragEnter(e)
{
    e.preventDefault();
    this.className += ' hovered';
    
}
function dragLeave()
{
    this.className= 'empty';
    
}
function dragDrop()
{
    this.className='empty';
    this.append(fill);
    
} 



