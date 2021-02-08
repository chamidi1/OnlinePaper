    document.getElementById('Dashboard').style.display='block';
    document.getElementById('Customer').style.display='none';
    document.getElementById('Order').style.display='none';
    document.getElementById('Item').style.display='none';
    document.getElementById('Supplier').style.display='none';

document.getElementById('clickDash').addEventListener('click',function(){

    document.getElementById('Customer').style.display='none';
    document.getElementById('Dashboard').style.display='block';
    document.getElementById('Item').style.display='none';
    document.getElementById('Order').style.display='none';
    document.getElementById('Supplier').style.display='none';

});


document.getElementById('clickCus').addEventListener('click',function(){
    //document.getElementById('clickCus').style.background='#007bff'
    //document.getElementById('clickCus').style.background='#007bff'
    document.getElementById('Customer').style.display='block';
    document.getElementById('Dashboard').style.display='none';
    document.getElementById('Item').style.display='none';
    document.getElementById('Order').style.display='none';
    document.getElementById('Supplier').style.display='none';

});

document.getElementById('clickOrder').addEventListener('click',function(){
    document.getElementById('Order').style.display='block';
    document.getElementById('Dashboard').style.display='none';
    document.getElementById('Customer').style.display='none';
    document.getElementById('Item').style.display='none';
    document.getElementById('Supplier').style.display='none';

});

document.getElementById('clickItem').addEventListener('click',function(){
    document.getElementById('Item').style.display='block';
    document.getElementById('Dashboard').style.display='none';
    document.getElementById('Customer').style.display='none';
    document.getElementById('Order').style.display='none';
    document.getElementById('Supplier').style.display='none';

});

document.getElementById('clickSupplier').addEventListener('click',function(){
    document.getElementById('Supplier').style.display='block';
    document.getElementById('Item').style.display='none';
    document.getElementById('Dashboard').style.display='none';
    document.getElementById('Customer').style.display='none';
    document.getElementById('Order').style.display='none';

});

function save(){

    var id= $('#cusID').val();
    var name= $('#cusName').val();
    var address= $('#cusAddress').val();
    var phoneNo= $('#cusPhone').val();


    $('#cusTable').append(
        '<tr>'+
        '<td>'+id+'</td>'+
        '<td>'+name+'</td>'+
        '<td>'+address+'</td>'+
        '<td>'+phoneNo+'</td>'+
        '<td>'+'<button type="button" class="btn btn-info btn-sm">'+'Update'+'</button>'+'</td>'+
        '<td>'+'<button type="button" class="btn btn-danger btn-sm">'+'Delete'+'</button>'+'</td>'+
        '</tr>'



    );
    $('#cusTable tr').off();

    $('#cusTable tr').click(function () {
        var id= $($(this).children().get(0)).text();
        var name=$($(this).children().get(1)).text();
        var address= $($(this).children().get(2)).text();
        var number= $($(this).children().get(3)).text();

        console.log(id,name,address,number);

        $('#Customer-modal1').modal('show');

        $('#cusID').val(id);
        $('#cusName').val(name);
        $('#cusAddress').val(address);
        $('#cusPhone').val(phoneNo);

    });

}
$('#addCus').click(function () {

   save()
});

$('#cusTable tr').on('dblclick',function () {
    $(this).remove()
});

$('#cusID').on('keydown',function (eventData) {

    if(eventData.key=='Enter'){
        $('#cusName').focus()
    }
})

    $('#cusName').on('keydown',function (eventData) {

        if(eventData.key=='Enter'){
            $('#cusAddress').focus()
        }
    })

    $('#cusAddress').on('keydown',function (eventData) {

        if(eventData.key=='Enter'){
            $('#cusPhone').focus()
        }
    })

    $('#cusPhone').on('keydown',function (eventData) {

        if(eventData.key=='Enter'){
            save();
        }
    })

    $('#UpdateCus').on('click',function () {


        var id =$('#cusID').val();
        var name =$('#cusName').val();
        var address =$('#cusAddress').val();
        var phone =$('#cusPhone').val();

        if(id==$($(this).children().get(0)).text){
            $($(this).children().get(1)).text(name);
            $($(this).children().get(1)).text(address);
            $($(this).children().get(1)).text(phone);
        }
    });
//Item--------------------------------------------------------------------------

    function itemSave(){

        var code= $('#itemCode').val();
        var name= $('#itemName').val();
        var price= $('#itemPrice').val();
        var qty= $('#itemQty').val();

        console.log(code,code,price,qty);

        $('#itemTable').append(
            '<tr>'+
            '<td>'+code+'</td>'+
            '<td>'+name+'</td>'+
            '<td>'+price+'</td>'+
            '<td>'+qty+'</td>'+
            '<td>'+'<button type="button" class="btn btn-info btn-sm">'+'Update'+'</button>'+'</td>'+
            '<td>'+'<button type="button" class="btn btn-danger btn-sm">'+'Delete'+'</button>'+'</td>'+
            '</tr>'

        );

        $('#itemTable tr').off();

        $('#itemTable tr').click(function () {
            var code= $($(this).children().get(0)).text();
            var name=$($(this).children().get(1)).text();
            var price= $($(this).children().get(2)).text();
            var qty= $($(this).children().get(3)).text();

            console.log(code,name,price,qty);

            $('#Item-modal').modal('show');

            $('#itemCode').val(code);
            $('#itemName').val(name);
            $('#itemPrice').val(price);
            $('#itemQty').val(qty);

        });
    }


    $('#addItem').click(function () {
        itemSave()

    });


    $('$itemid').on('keydown',function (eventData) {
       var v1=$($('#itemTable tr').children().get(0)).text();
        if(eventData().key==v1){


                $('itemnam').val('dgds')
       }

    })
































