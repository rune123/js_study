newFunction();
//1���ʂ��@9���X�^�[�g 10���S�[��

function newFunction() {
    var loc = 72;

    var Main_map = [
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 1, 1, 1, 1, 1,10, 0, 0, 0,
         0, 0, 0, 1, 1, 0, 0, 1, 0, 0, //3
         0, 0, 0, 1, 0, 1, 1, 1, 0, 0, //4
         0, 1, 1, 1, 1, 0, 1, 0, 0, 0, //5
         0, 0, 0, 0, 1, 0, 1, 0, 0, 0, //6
         0, 0, 1, 1, 1, 1, 1, 1, 0, 0, //7
         0, 0, 9, 0, 0, 0, 0, 1, 0, 0, //8
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0  //9
    ];
    console.log(Main_map[loc]);
    console.log(Main_map);
    console.log(loc);



addEventListener("keydown", keydownfunc, false);
 
function keydownfunc( event ) {
    var move = Main_map[loc];

    var key_code = event.keyCode;
    if( key_code === 37 )               //��
        
        console.log({loc});
        console.log({move});
            switch (move){
                case 0:
                    console.log('�ړ��ł��܂���');
                    loc +=1; 
                    break;

                case 1:
                    loc -=1; 
                    break;

                case 9:
                    console.log('�X�^�[�g�n�_����');
                    break;

                case 10:
                    console.log('�S�[������');
                    break;
            }


        if( key_code === 38 )
            loc -=10;               //��
            switch (move){
                case 0:
                    console.log('�ړ��ł��܂���');
                    loc +=10; 
                    break;

                case 1:
                    break;

                case 9:
                    console.log('�X�^�[�g�n�_����');
                    break;

                case 10:
                    console.log('�S�[������');
                    break;
            }

        if( key_code === 39 )               //�E
            loc +=1;
            switch (move){
                case 0:
                    console.log('�ړ��ł��܂���');
                    loc -=1; 
                    break;

                case 1:
                    break;

                case 9:
                    console.log('�X�^�[�g�n�_����');
                    break;

                case 10:
                    console.log('�S�[������');
                    break;
            }

        if( key_code === 40 )               //��
            loc +=10;
            switch (move){
                case 0:
                    console.log('�ړ��ł��܂���');
                    loc -=10; 
                    break;

                case 1:
                    break;

                case 9:
                    console.log('�X�^�[�g�n�_����');
                    break;

                case 10:
                    console.log('�S�[������');
                    break;
            }   // if( key_code === 37 )               //��
    //     loc -=1; 
    //     if(loc <0 ||loc >89){
    //         console.log('�ړ��ł��܂���');
    //         loc +=1; 
    //     }else{
    //         if(move==1){

    //         }else{
    //             console.log('�ړ��ł��܂���');
    //             loc +=1; 
    //         }
            
    //     }

    // if( key_code === 38 )
    //     loc -=10;               //��
    //     if(loc <0 || loc >89){
    //         console.log('�ړ��ł��܂���');
    //         loc +=10;
    //     }else{ 
    //         if(move===1){

    //         }else{
    //             console.log('�ړ��ł��܂���');
    //             loc +=1; 
    //         }
    //     }

    // if( key_code === 39 )               //�E
    //     loc +=1;
    //     if(loc <0 || loc >89){
    //         console.log('�ړ��ł��܂���');
    //         loc -=1;
    //     }else{
    //         if(move==1){

    //         }else{
    //             console.log('�ړ��ł��܂���');
    //             loc +=1; 
    //         }
    //     }

    // if( key_code === 40 )               //��
    //     loc +=10;
    //     if(loc <0||loc >89){
    //         console.log('�ړ��ł��܂���');
    //         loc -=10;
    //     }else{
    //         if(move==1){

    //         }else{
    //             console.log('�ړ��ł��܂���');
    //             loc +=1; 
    //         }
    //     }

}

}