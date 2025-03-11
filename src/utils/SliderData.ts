import { ImageSourcePropType } from 'react-native'

export type ImageSliderType = {
    title: string,
    image: ImageSourcePropType,
    date: string
}

export const ImageSlider = [
    {
        title: "Pahala Umroh di Bulan Ramadhan Setara Dengan Pahala Haji?",
        image: require('../assets/data/carousel.jpg'),
        date: '1 Jam yang lalu'
    },
    {
        title: "Wajib Praktik! 12 Cara Antimager Khatam Al-Qur'an di Ramadhan",
        image: require('../assets/data/sujud.jpg'),
        date: '5 Jam yang lalu'
    },
    {
        title: '7 Amalan di Bulan Ramadan yang Bisa Menambah Pahala',
        image: require('../assets/data/carousel.jpg'),
        date: '7 Jam yang lalu'
    }
]