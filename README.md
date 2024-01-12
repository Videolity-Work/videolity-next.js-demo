# Next.js ile Videolity iFrame Entegrasyonu

Bu projede, Videolity iFrame entegrasyonunun nasıl gerçekleştirileceğini öğreneceksiniz. Bu örnek, Next.js kullanarak bir web uygulaması oluşturmayı ve bir video oynatıcı iFrame'ini entegre etmeyi göstermektedir.
Projenin deploy haline [buradan](https://master.d2bbwqmzxnkpoc.amplifyapp.com/) inceleyebilirsiniz. 
## 🛠 Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Repos'u Kopyalayın**

    ```bash
    git clone https://github.com/mhmmdglc/videolity-next.js-demo.git
    ```

2. **Bağımlılıkları Yükleyin**

   Projeyi klonladıktan sonra, ana dizine gidin ve bağımlılıkları yükleyin.

    ```bash
    cd videolity-next
    npm install
    ```

   veya

    ```bash
    yarn install
    ```

3. **Projeyi Çalıştırın**

    ```bash
    npm run dev
    ```

   veya

    ```bash
    yarn dev
    ```

   Şimdi projeniz [http://localhost:3000](http://localhost:3000) adresinde çalışıyor olmalı.

## 🎥 Video Entegrasyonu

Entegrasyon dosyasını `src/components/player/video-player.js` dizini altında bulabilirsiniz. Buradaki `iframe` etiketinde `src="link"` kısmından `link`'i kendi video bağlantınızla değiştirebilirsiniz.

## 📚 Kaynaklar ve Dokümantasyon

- [Next.js Dokümantasyon](https://nextjs.org/docs)
- [Videolity Kurulum](https://preview.dunh29xielhio.amplifyapp.com/dashboard/tutorial)

## 📝 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Detaylar için [LISANS](LICENSE) dosyasına bakın.


