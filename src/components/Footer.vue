<template lang="">
    <div class="flex flex-col bg-sky-700  w-[100%]">
        <div class="flex flex-row items-center mt-5 justify-evenly w-[100%]">
            <h1 class="text-white text-[30px] w-[30%]">Contactanos</h1>
            <div clas="flex justify-center items-center w-[70%]">
                <form class="flex flex-col w-[100%] gap-5">
                    <div class="w-[100%] flex flex-row justify-between items-center gap-10">
                        <input type="text" placeholder="ingrese texto" class="text-center  w-[40%] h-[50px] rounded-lg border ">
                        <input type="text" placeholder="ingrese texto" class="text-center  w-[40%] h-[50px] rounded-lg border">
                    </div>
                    <textarea placeholder="ingrese el texto" name="" id="" cols="30" rows="10" class="border rounded-lg w-[100%]"></textarea>
                </form>
                <button class="w-[100%] mt-5 bg-blue-700 h-[50px] border rounded-xl text-white">Enviar</button>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-row justify-center items-center">
                <img src="../assets/logoIcono.svg" alt="icono">
                <img src="../assets/logoTexto.svg" alt="texto" class="mt-5">
                <div class="h-[5px] bg-white w-[50%] ml-5 mr-5 mt-3" />
                <span class="text-center text-white text-[25px] mt-3">Siguenos en nuestras redes</span>
            </div>
            <div class="flex flex-row justify-around mt-5 mb-5">
                <div class="grid grid-cols-2 ml-10 gap-10">
                    <div class="flex flex-row justify-start items-center">
                        <img src="https://img.icons8.com/ios/512/whatsapp.png" width="50" alt="wsp">
                        <span class="text-white">11245058</span>
                    </div>
                    <div class="flex flex-row justify-start items-center">
                        <img src="https://img.icons8.com/ios/512/region-code.png" width="50" alt="local">
                        <span class="text-white">calle 123</span>
                    </div>
                    <div class="flex flex-row justify-stjustify-start items-center">
                        <img src="https://img.icons8.com/ios-filled/512/phone-message.png" width="50" alt="telefono viejo">
                        <span class="text-white">44245058</span>
                    </div>
                    <div class="flex flex-row justify-stjustify-start items-center">
                        <img src="https://img.icons8.com/ios/512/filled-message.png" width="50" alt="">
                        <span class="text-white">mail@info.com</span>
                    </div>
                </div>
                <div>
                        <div class="grid grid-cols-3 gap-10">
                            <img width="50" src="https://img.icons8.com/ios-filled/2x/facebook-new.png" alt="facebook">
                            <img width="50" src="https://img.icons8.com/ios-filled/512/instagram-new.png" alt="instagram">
                            <img width="50" src="https://img.icons8.com/ios-filled/512/twitter.png" alt="twitter">
                            <img width="50" src="https://img.icons8.com/ios-filled/512/pinterest--v1.png" alt="pinterest">
                            <img width="50" src="https://img.icons8.com/ios-filled/512/gmail.png" alt="gmail">
                            <img width="50" src="https://img.icons8.com/ios-filled/2x/youtube-play.png" alt="youtube">
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
