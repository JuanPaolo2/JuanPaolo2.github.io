const fill = document.querySelectorAll('.Fill');
const empties = document.querySelectorAll('.empty');

let draggedItem = null;

for(let i = 0; i < fill.length; i++) {
    const item = fill[i];
    
    item.addEventListener('dragstart', function(){
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        },0);
        
    });
    
    item.addEventListener('dragend',function(){
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        },0);
    });
    
    
    for(let j = 0; j < empties.length; j++){
        const list = empties[j];
        
        list.addEventListener('dragover' function(e){
            e.preventDefault();
        });
        list.addEventListener('dragenter' function(e){
            e.preventDefault();
        });
        
        list.addEventListener('drop' function(e){
            this.append(draggedItem);
        });
    }
}



/*fill listeners
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
    
} */



