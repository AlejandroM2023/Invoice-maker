

let num = 1;

let totalParts=0;
let totalLabor=0;


function displayTotal(part,labor){
    const x = $('#partsTotal');
    const y = $('#laborTotal');

    x.text('');
    y.text('');

    totalParts = totalParts + Number(part);
    totalLabor = totalLabor + Number(labor);
    x.text(`Parts Total: ${totalParts}`);
    y.text(`Parts Total: ${totalLabor}`);
}

function datOnLoad(){
    const date = $('h2');
    date.text(dayjs().format('MM/DD/YYYY'));
}


function handleAddRow(event){
    
    event.preventDefault();


    const tableBody = $('#tableBody');
    console.log(tableBody);

    //create row and append row
    const row = $('<tr>');
    tableBody.append(row);

    //create data point
    const info1 = $('<td>');
    info1.text(num);
    info1.attr('scope','row');


    //info for service
    const service =$('<td>');
    service.text($('#service').val());

    //info for service
    const part =$('<td>');
    part.text($('#part').val());



    //info for service
    const cost =$('<td>');
    cost.text($('#cost').val());


    row.append(info1);
    row.append(service);
    row.append(part);
    row.append(cost);

    num ++;
    displayTotal($('#part').val(),$('#cost').val());
};



// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    
    
    datOnLoad();
    $( "#tableBody" ).sortable();


    //handle adding
    const addRow = $('#addRow');
    addRow.on('click',handleAddRow);


   

    

});

