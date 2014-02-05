var app = angular.module('MyTutorialApp',[]);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});
app.controller("MainController", function($scope,$interval){
	$scope.Aralik = Math.floor(Math.random() * 250) + 0;
	    $scope.people = [
		{
			id: 0,
			code: 'merhaba',
                        decode : 'hello'
			
		},
		{
			id: 1,
			code: 'görmek',
			decode : 'see'
		},
                {
			id: 2,
			code: 'asmak',
			decode : 'hang'
		},
                {
			id: 3,
			code: 'detay',
			decode : 'detail'
		},
                {
			id: 4,
			code: 'ripe',
			decode : 'olgun'
		},
                {
			id: 5,
			code: 'funny',
			decode : 'komik'
		}, 
                {
			id: 6,
			code: 'patates',
			decode : 'potato'
		},
                {
			id: 7,
			code: 'kadın',
			decode : 'female'
		},
                {
			id: 8,
			code: 'also',
			decode : 'ayrıca'
		},
                {
			id: 9,
			code: 'gece',
			decode : 'night'
		},
                {
			id: 10,
			code: 'absolutely',
			decode : 'kesinlikle'
		},
                 {
			id: 11,
			code: 'avukat',
			decode : 'lawyer'
		},
                 {
			id: 12,
			code: 'karanlık',
			decode : 'dark'
		},
                {
			id: 13,
			code: 'long',
			decode : 'uzun'
		},
                {
			id: 14,
			code: 'çerçeve',
			decode : 'frame'
		},
                {
			id: 15,
			code: 'bulut',
			decode : 'cloud'
		},
                {
			id: 16,
			code: 'farmer',
			decode : 'çiftçi'
		},
                {
			id: 17,
			code: 'nose',
			decode : 'burun'
		},
                {
			id: 18,
			code: 'body',
			decode : 'vücut'
		},
                 {
			id: 19,
			code: 'beğenmek',
			decode : 'like'
		},
                 {
			id: 20,
			code: 'konuşmak',
			decode : 'speak'
		},        
                 {
			id: 21,
			code: 'böğürtlen',
			decode : 'blackberry'
		},        
                 {
			id: 22,
			code: 'kulak',
			decode : 'ear'
		},        
                 {
			id: 23,
			code: 'iceland',
			decode : 'izlanda'
		}
		,        
                 {
			id: 24,
			code: 'onaltı',
			decode : 'sixteen'
		}
		,        
                 {
			id: 25,
			code: 'çanta',
			decode : 'bag'
		}
		,        
                 {
			id: 26,
			code: 'yüzük',
			decode : 'ring'
		}
		,        
                 {
			id: 27,
			code: 'dad',
			decode : 'baba'
		}
		,        
                 {
			id: 28,
			code: 'kiss',
			decode : 'öpmek'
		}
		,        
                 {
			id: 29,
			code: 'benim',
			decode : 'my'
		}
		,        
                 {
			id: 30,
			code: 'weekend',
			decode : 'hafta sonu'
		}
		,        
                 {
			id: 31,
			code: 'puzzle',
			decode : 'bilmece'
		}
		,        
                 {
			id: 32,
			code: 'istemek',
			decode : 'want'
		}
		,        
                 {
			id: 33,
			code: 'bulgaria',
			decode : 'bulgaristan'
		}
		,        
                 {
			id: 34,
			code: 'cyprus',
			decode : 'kıbrıs'
		}
		,        
                 {
			id: 35,
			code: 'netherland',
			decode : 'hollanda'
		}
		,        
                 {
			id: 36,
			code: 'küba',
			decode : 'cuba'
		}
		,        
                 {
			id: 37,
			code: 'ondört',
			decode : 'fourteen'
		}
		,        
                 {
			id: 38,
			code: 'russia',
			decode : 'rusya'
		}
		,        
                 {
			id: 39,
			code: 'long',
			decode : 'uzun'
		}
		,        
                 {
			id: 40,
			code: 'hi',
			decode : 'merhaba'
		}
		,        
                 {
			id: 41,
			code: 'pencil sharpener',
			decode : 'kalemtraş'
		}
		,        
                 {
			id: 42,
			code: 'mühendis',
			decode : 'engineer'
		}
		,        
                 {
			id: 43,
			code: 'how',
			decode : 'nasıl'
		}
		,        
                 {
			id: 44,
			code: 'el',
			decode : 'hand'
		}
		,        
                 {
			id: 45,
			code: 'oniki',
			decode : 'twelve'
		}
		,        
                 {
			id: 46,
			code: 'yatak',
			decode : 'bed'
		}
		,        
                 {
			id: 47,
			code: 'create',
			decode : 'yaratmak'
		}
		,        
                 {
			id: 48,
			code: 'break',
			decode : 'kırmak'
		}
		,        
                 {
			id: 49,
			code: 'düşünmek',
			decode : 'think'
		}
		,        
                 {
			id: 50,
			code: 'old',
			decode : 'eski'
		}
		,        
                 {
			id: 51,
			code: 'gri',
			decode : 'gray'
		}
		,        
                 {
			id: 52,
			code: 'orada',
			decode : 'there'
		}
		,        
                 {
			id: 53,
			code: 'sözlük',
			decode : 'dictionary'
		}
		,        
                 {
			id: 54,
			code: 'uzun',
			decode : 'tall'
		}
		,        
                 {
			id: 55,
			code: 'cat',
			decode : 'kedi'
		},        
                 {
			id: 56,
			code: 'dog',
			decode : 'köpek'
		},        
                 {
			id: 57,
			code: 'indirim',
			decode : 'discount'
		},        
                 {
			id: 58,
			code: 'estonia',
			decode : 'estonya'
		},        
                 {
			id: 59,
			code: 'sonraki',
			decode : 'next'
		},        
                 {
			id: 60,
			code: 'bad',
			decode : 'kötü'
		},        
                 {
			id: 61,
			code: 'kelime',
			decode : 'word'
		},        
                 {
			id: 62,
			code: 'sıfır',
			decode : 'zero'
		},        
                 {
			id: 63,
			code: 'zayıf',
			decode : 'thin'
		},        
                 {
			id: 64,
			code: 'seventy',
			decode : 'yetmiş'
		},        
                 {
			id: 65,
			code: 'love is blind',
			decode : 'aşk kördür'
		},        
                 {
			id: 66,
			code: 'onüç',
			decode : 'thirteen'
		},        
                 {
			id: 67,
			code: 'yaşlı',
			decode : 'old'
		},        
                 {
			id: 68,
			code: 'five',
			decode : 'beş'
		},        
                 {
			id: 69,
			code: 'hot',
			decode : 'sıcak'
		},        
                 {
			id: 70,
			code: 'denmark',
			decode : 'danimarka'
		},        
                 {
			id: 71,
			code: 'fransa',
			decode : 'france'
		},        
                 {
			id: 72,
			code: 'iki',
			decode : 'two'
		},        
                 {
			id: 73,
			code: 'belarus',
			decode : 'beyaz rusya'
		},        
                 {
			id: 74,
			code: 'daha kötü',
			decode : 'worse'
		},        
                 {
			id: 75,
			code: 'güneş gözlüğü',
			decode : 'sunglasses'
		},        
                 {
			id: 76,
			code: 'estonya',
			decode : 'estonia'
		},        
                 {
			id: 77,
			code: 'need',
			decode : 'ihtiyaç'
		},        
                 {
			id: 78,
			code: 'fifteen',
			decode : 'onbeş'
		},        
                 {
			id: 79,
			code: 'kiss',
			decode : 'öpücük'
		},        
                 {
			id: 80,
			code: 'ev hanımı',
			decode : 'housewife'
		},        
                 {
			id: 81,
			code: 'oyuncak',
			decode : 'toy'
		},        
                 {
			id: 82,
			code: 'awful',
			decode : 'berbat'
		},        
                 {
			id: 83,
			code: 'chair',
			decode : 'sandalye'
		},        
                 {
			id: 84,
			code: 'sandalye',
			decode : 'chair'
		},        
                 {
			id: 85,
			code: 'dondurma',
			decode : 'ice cream'
		},        
                 {
			id: 86,
			code: 'hafif',
			decode : 'light'
		},        
                 {
			id: 87,
			code: 'next',
			decode : 'ileri'
		},        
                 {
			id: 88,
			code: 'put',
			decode : 'koymak'
		},        
                 {
			id: 89,
			code: 'şeker',
			decode : 'sugar'
		},        
                 {
			id: 90,
			code: 'with',
			decode : 'ile'
		},        
                 {
			id: 91,
			code: 'with me',
			decode : 'benimle'
		},        
                 {
			id: 92,
			code: 'come on',
			decode : 'hadi'
		},        
                 {
			id: 93,
			code: 'küpe',
			decode : 'earrings'
		},        
                 {
			id: 94,
			code: 'böğürtlen',
			decode : 'blackberry'
		},        
                 {
			id: 95,
			code: 'böğürtlen',
			decode : 'blackberry'
		},        
                 {
			id: 96,
			code: 'böğürtlen',
			decode : 'blackberry'
		},        
                 {
			id: 97,
			code: 'brother',
			decode : 'erkek kardeş'
		},        
                 {
			id: 98,
			code: 'bro',
			decode : 'erkek kardeş'
		},        
                 {
			id: 99,
			code: 'easy',
			decode : 'kolay'
		},        
                 {
			id: 100,
			code: 'güneş',
			decode : 'sun'
		},        
                 {
			id: 101,
			code: 'görmek',
			decode : 'see'
		},        
                 {
			id: 102,
			code: 'bin',
			decode : 'thousand'
		},        
                 {
			id: 103,
			code: 'süt',
			decode : 'milk'
		},        
                 {
			id: 104,
			code: 'lip',
			decode : 'dudak'
		},        
                 {
			id: 105,
			code: 'south africa',
			decode : 'güney afrika'
		},        
                 {
			id: 106,
			code: 'thin',
			decode : 'zayıf'
		},        
                 {
			id: 107,
			code: 'itfaiyeci',
			decode : 'fireman'
		},        
                 {
			id: 108,
			code: 'right',
			decode : 'doğru'
		},        
                 {
			id: 109,
			code: 'pink',
			decode : 'pembe'
		},        
                 {
			id: 110,
			code: 'england',
			decode : 'ingiltere'
		},        
                 {
			id: 111,
			code: 'hastane',
			decode : 'hospital'
		},        
                 {
			id: 112,
			code: 'turkey',
			decode : 'türkiye'
		},        
                 {
			id: 113,
			code: 'hungary',
			decode : 'macaristan'
		},        
                 {
			id: 114,
			code: 'sekiz',
			decode : 'eight'
		},        
                 {
			id: 115,
			code: 'italy',
			decode : 'italya'
		},        
                 {
			id: 116,
			code: 'turuncu',
			decode : 'orange'
		},        
                 {
			id: 117,
			code: 'portakal',
			decode : 'orange'
		},        
                 {
			id: 118,
			code: 'küçük',
			decode : 'small'
		},        
                 {
			id: 119,
			code: 'father',
			decode : 'baba'
		},        
                 {
			id: 120,
			code: 'we',
			decode : 'biz'
		},        
                 {
			id: 121,
			code: 'sword',
			decode : 'kılıç'
		},        
                 {
			id: 122,
			code: 'long',
			decode : 'uzun'
		},        
                 {
			id: 123,
			code: 'onbir',
			decode : 'eleven'
		},        
                 {
			id: 124,
			code: 'danimarka',
			decode : 'denmark'
		},        
                 {
			id: 125,
			code: 'polis',
			decode : 'police'
		},        
                 {
			id: 126,
			code: 'cinema',
			decode : 'sinema'
		},        
                 {
			id: 127,
			code: 'egg',
			decode : 'yumurta'
		},        
                 {
			id: 128,
			code: 'sıcak',
			decode : 'hot'
		},        
                 {
			id: 129,
			code: 'before',
			decode : 'önce'
		},        
                 {
			id: 130,
			code: 'önce',
			decode : 'before'
		},        
                 {
			id: 131,
			code: 'after',
			decode : 'sonra'
		},        
                 {
			id: 132,
			code: 'sonra',
			decode : 'after'
		},        
                 {
			id: 133,
			code: 'complain',
			decode : 'şikayet etmek'
		},        
                 {
			id: 134,
			code: 'afedersiniz',
			decode : 'excuse me'
		},        
                 {
			id: 135,
			code: 'yaş',
			decode : 'age'
		},        
                 {
			id: 136,
			code: 'kırmızı',
			decode : 'red'
		},        
                 {
			id: 137,
			code: 'word',
			decode : 'kelime'
		},        
                 {
			id: 138,
			code: 'world',
			decode : 'dünya'
		},        
                 {
			id: 139,
			code: 'dünya',
			decode : 'world'
		},        
                 {
			id: 140,
			code: 'behave',
			decode : 'davranmak'
		},        
                 {
			id: 141,
			code: 'circle',
			decode : 'çember'
		},        
                 {
			id: 142,
			code: 'bluff',
			decode : 'blöf'
		},        
                 {
			id: 143,
			code: 'camp',
			decode : 'kamp'
		},        
                 {
			id: 144,
			code: 'bicycle',
			decode : 'bisiklet'
		},        
                 {
			id: 145,
			code: 'act',
			decode : 'davranmak'
		},        
                 {
			id: 146,
			code: 'ok',
			decode : 'tamam'
		},        
                 {
			id: 147,
			code: 'full',
			decode : 'dolu'
		},        
                 {
			id: 148,
			code: 'deniz',
			decode : 'sea'
		},        
                 {
			id: 149,
			code: 'use',
			decode : 'kullanmak'
		},        
                 {
			id: 150,
			code: 'benim',
			decode : 'my'
		},        
                 {
			id: 151,
			code: 'vakit nakittir',
			decode : 'time is money'
		},        
                 {
			id: 152,
			code: 'there',
			decode : 'orada'
		},        
                 {
			id: 153,
			code: 'housewife',
			decode : 'ev hanımı'
		},        
                 {
			id: 154,
			code: 'zaman',
			decode : 'time'
		},        
                 {
			id: 155,
			code: 'want',
			decode : 'istemek'
		},        
                 {
			id: 156,
			code: 'human',
			decode : 'insan'
		},        
                 {
			id: 157,
			code: 'hunter',
			decode : 'avcı'
		},        
                 {
			id: 158,
			code: 'sakat',
			decode : 'crippled'
		},        
                 {
			id: 159,
			code: 'blind',
			decode : 'kör'
		},        
                 {
			id: 160,
			code: 'home',
			decode : 'ev'
		},        
                 {
			id: 161,
			code: 'ayakkabı',
			decode : 'shoes'
		},        
                 {
			id: 162,
			code: 'beautiful',
			decode : 'güzel'
		},        
                 {
			id: 163,
			code: 'yakışıklı',
			decode : 'handsome'
		},        
                 {
			id: 164,
			code: 'vermek',
			decode : 'give'
		},        
                 {
			id: 165,
			code: 'bee',
			decode : 'arı'
		},        
                 {
			id: 166,
			code: 'gelmek',
			decode : 'come'
		},        
                 {
			id: 167,
			code: 'come',
			decode : 'gelmek'
		},        
                 {
			id: 168,
			code: 'gun',
			decode : 'silah'
		},        
                 {
			id: 169,
			code: 'foot',
			decode : 'ayak'
		},        
                 {
			id: 170,
			code: 'ball',
			decode : 'top'
		},        
                 {
			id: 171,
			code: 'you',
			decode : 'sen'
		},        
                 {
			id: 172,
			code: 'kızkardeş',
			decode : 'sister'
		},        
                 {
			id: 173,
			code: 'zeki',
			decode : 'intelligent'
		},        
                 {
			id: 174,
			code: 'radyo',
			decode : 'radio'
		},        
                 {
			id: 175,
			code: 'şapka',
			decode : 'hat'
		},        
                 {
			id: 176,
			code: 'fil',
			decode : 'elephant'
		},        
                 {
			id: 177,
			code: 'aramak',
			decode : 'search'
		},        
                 {
			id: 178,
			code: 'perfect',
			decode : 'kusursuz'
		},        
                 {
			id: 179,
			code: 'portekiz',
			decode : 'portugal'
		},        
                 {
			id: 180,
			code: 'bilezik',
			decode : 'bracelet'
		},        
                 {
			id: 181,
			code: 'hoş',
			decode : 'nice'
		},        
                 {
			id: 182,
			code: 'nice',
			decode : 'hoş'
		},        
                 {
			id: 183,
			code: 'bike',
			decode : 'bisiklet'
		},        
                 {
			id: 184,
			code: 'snake',
			decode : 'yılan'
		},        
                 {
			id: 185,
			code: 'work',
			decode : 'çalışmak'
		},        
                 {
			id: 186,
			code: 'onlar',
			decode : 'they'
		},        
                 {
			id: 187,
			code: 'yüz',
			decode : 'hundred'
		},        
                 {
			id: 188,
			code: 'yol',
			decode : 'way'
		},        
                 {
			id: 189,
			code: 'far',
			decode : 'uzak'
		},        
                 {
			id: 190,
			code: 'fat',
			decode : 'şişman'
		},        
                 {
			id: 191,
			code: 'oil',
			decode : 'sıvı yağ'
		},        
                 {
			id: 192,
			code: 'petrol',
			decode : 'oil'
		},        
                 {
			id: 193,
			code: 'one',
			decode : 'bir'
		},        
                 {
			id: 194,
			code: 'yellow',
			decode : 'sarı'
		},        
                 {
			id: 195,
			code: 'doctor',
			decode : 'doktor'
		},        
                 {
			id: 196,
			code: 'nasıl',
			decode : 'how'
		},        
                 {
			id: 197,
			code: 'big',
			decode : 'büyük'
		},        
                 {
			id: 198,
			code: 'cheap',
			decode : 'ucuz'
		},        
                 {
			id: 199,
			code: 'engineer',
			decode : 'mühendis'
		},        
                 {
			id: 200,
			code: 'dusty',
			decode : 'tozlu'
		},        
                 {
			id: 201,
			code: 'gün',
			decode : 'day'
		},        
                 {
			id: 202,
			code: 'ihtiyaç',
			decode : 'need'
		},        
                 {
			id: 203,
			code: 'occupied',
			decode : 'meşgul'
		},        
                 {
			id: 204,
			code: 'bad',
			decode : 'kötü'
		},        
                 {
			id: 205,
			code: 'shut',
			decode : 'kapamak'
		},        
                 {
			id: 206,
			code: 'close',
			decode : 'kapalı'
		},        
                 {
			id: 207,
			code: 'off',
			decode : 'devre dışı'
		},        
                 {
			id: 208,
			code: 'sad',
			decode : 'üzgün'
		},        
                 {
			id: 209,
			code: 'yeşil',
			decode : 'green'
		},        
                 {
			id: 210,
			code: 'için',
			decode : 'for'
		},        
                 {
			id: 211,
			code: 'quick',
			decode : 'hızlı'
		},        
                 {
			id: 212,
			code: 'billion',
			decode : 'milyar'
		},        
                 {
			id: 213,
			code: 'purple',
			decode : 'mor'
		},        
                 {
			id: 214,
			code: 'greece',
			decode : 'yunanistan'
		},        
                 {
			id: 215,
			code: 'son',
			decode : 'last'
		},        
                 {
			id: 216,
			code: 'sevmek',
			decode : 'love'
		},        
                 {
			id: 217,
			code: 'people',
			decode : 'insanlar'
		},        
                 {
			id: 218,
			code: 'iyi',
			decode : 'good'
		},        
                 {
			id: 219,
			code: 'teşekkürler',
			decode : 'thanks'
		},        
                 {
			id: 220,
			code: 'enemy',
			decode : 'düşman'
		},        
                 {
			id: 221,
			code: 'useless',
			decode : 'faydasız'
		},        
                 {
			id: 222,
			code: 'ama',
			decode : 'but'
		},        
                 {
			id: 223,
			code: 'hafif',
			decode : 'light'
		},        
                 {
			id: 224,
			code: 'mutlu',
			decode : 'happy'
		},        
                 {
			id: 225,
			code: 'control',
			decode : 'kontrol etmek'
		},        
                 {
			id: 226,
			code: 'boy',
			decode : 'erkek çocuk'
		},        
                 {
			id: 227,
			code: 'ahead',
			decode : 'başta'
		},        
                 {
			id: 228,
			code: 'afraid',
			decode : 'korkmak'
		},        
                 {
			id: 229,
			code: 'hate',
			decode : 'nefret'
		},        
                 {
			id: 230,
			code: 'club',
			decode : 'klüp'
		},        
                 {
			id: 231,
			code: 'fine',
			decode : 'iyi'
		},        
                 {
			id: 232,
			code: 'gentleman',
			decode : 'centilmen'
		},        
                 {
			id: 233,
			code: 'equality',
			decode : 'eşitlik'
		},        
                 {
			id: 234,
			code: 'elegant',
			decode : 'şık'
		},        
                 {
			id: 235,
			code: 'excite',
			decode : 'heyecanlandırmak'
		},        
                 {
			id: 236,
			code: 'armour',
			decode : 'zırh'
		},        
                 {
			id: 237,
			code: 'ant',
			decode : 'karınca'
		},        
                 {
			id: 238,
			code: 'apply',
			decode : 'uygulamak'
		},        
                 {
			id: 239,
			code: 'cousin',
			decode : 'kuzen'
		},        
                 {
			id: 240,
			code: 'company',
			decode : 'şirket'
		},        
                 {
			id: 241,
			code: 'attend',
			decode : 'katılmak'
		},        
                 {
			id: 242,
			code: 'altogether',
			decode : 'tamamen'
		},        
                 {
			id: 243,
			code: 'declare',
			decode : 'bildirmek'
		},        
                 {
			id: 244,
			code: 'document',
			decode : 'belge'
		},        
                 {
			id: 245,
			code: 'cup',
			decode : 'kupa'
		},        
                 {
			id: 246,
			code: 'face',
			decode : 'yüz'
		},        
                 {
			id: 247,
			code: 'book',
			decode : 'kitap'
		},        
                 {
			id: 248,
			code: 'sleep',
			decode : 'uyku'
		},        
                 {
			id: 249,
			code: 'dirt',
			decode : 'kir'
		}
	];
	var stop;
	var cntr = 100;
	var dogrix = 0;
	var hatalix = 0;
	$scope.playcounter = cntr;
	$scope.hatali = hatalix;
	$scope.dogri = dogrix;
    $scope.nmbr = $scope.people[$scope.Aralik].decode.length;
    stop = $interval(function() {
	if (cntr == 0) {
		$interval.cancel(stop);
		
		
		
		 FB.api('/me', function(response) {
			if (response.id == undefined) {
				//kayıt olmamış pezevenkler için
				var cvp = "ingilizce-kelime-ogren.com da "+dogrix+" kelime bildim ve "+hatalix+" yeni ingilizce kelime öğrendim."
				 $("#sharer").html("Tebrikler arkadaşlarınızında skorlarını görebilmek için lütfen skorunuzu paylaşın.");
				$("#texter").fadeOut(200);
				$("#kelime").html('<h5>'+ cvp +'</h5>Skorunu paylaş<br><hr><a class="btnx btnx-tweet" href="https://twitter.com/intent/tweet?text='+ cvp +'&via=ogreningilizce">Twitter</a><a class="btnx btnx-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://ingilizce-kelime-ogren.com">Facebook</a><a class="btnx btnx-google" href="https://plus.google.com/share?url=http://ingilizce-kelime-ogren.com">Google+</a>');
		  
			}else { 
	      $(document).ready(function(){
  // using jQuery
function getCookie(name) {
var cookieValue = null;
if (document.cookie && document.cookie != '') {
var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
var cookie = jQuery.trim(cookies[i]);
// Does this cookie string begin with the name we want?
if (cookie.substring(0, name.length + 1) == (name + '=')) {
cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
break;
}
}
}
return cookieValue;
}

		$.ajax({
		  type:'POST',
		  url:'http://ingilizce-kelime-ogren.com/success/',
		  data:{uid: response.id,isim : response.name,bildin : dogrix,ogrendin: hatalix},
		  success:function(cevap){
		
		  $("#sharer").html("Tebrikler arkadaşlarınızında skorlarını görebilmek için lütfen skorunuzu paylaşın.");
		  $("#texter").fadeOut(200);
		  $("#kelime").html('<h5>'+ cevap +'</h5>Skorunu paylaş<br><a class="btnx btnx-tweet" href="https://twitter.com/intent/tweet?text='+ cevap +'&via=ogreningilizce">Twitter</a><a class="btnx btnx-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://ingilizce-kelime-ogren.com">Facebook</a><a class="btnx btnx-google" href="https://plus.google.com/share?url=http://ingilizce-kelime-ogren.com">Google+</a>');
		  $("#msjs").fadeOut(200);
		  $("#cvbi").fadeOut(200);
		  $("#rslt").fadeOut(200);
		  //başarılı olduğunda bir ajax isteği daha yaratır .
		  $.ajax({
		  type:'POST',
		  url:'http://ingilizce-kelime-ogren.com/send_message',
		  data:{dogru : dogrix, hatali : hatalix,user: response.name,link : response.link, img : response.id},
		  success:function(cevap){
		 // $("#msjs").append('');
		  },
		  });//ajax isteği bitiş
		  
		  
		  }, //1. success fonk bitişi 
		  });//ajax isteği bitiş
		  }); //document ready bitiş.
	      
	 } 	  	    
    }); //FBapiME bitişi.
		
	}else {
        var x = $scope.people[$scope.Aralik];
	switch ($scope.google) {
		case x.decode: //------**DOĞRU BİLDİ****----------+!1
			$scope.Aralik = Math.floor(Math.random() * 250) + 0;
			$scope.google = "";
			$scope.result = "";
			cntr--;
			$scope.playcounter = cntr;
			dogrix++;
			$scope.dogri = dogrix;
			break;
		case "qqq": //-------***BİLEMEDİ****----------!1
			$scope.Aralik = Math.floor(Math.random() * 250) + 0;
			$scope.result = x.code +"<=>"+ x.decode;
			$scope.google = "";
			cntr--;
			$scope.playcounter = cntr;
			hatalix++;
			$scope.hatali = hatalix;
			break;
		case "www": //-------***İP UCU İSTEDİ****----------!0
			var xnxxl = $scope.people[$scope.Aralik].decode.length;
			$scope.result = $scope.people[$scope.Aralik].decode.charAt(0)+"***"+ $scope.people[$scope.Aralik].decode.charAt(xnxxl-1);
			$scope.google = "";
			break;
		default:
			if ($scope.google == undefined) {
				var KelimeninHarfSayisi = x.decode.length;
				$scope.nmbr = KelimeninHarfSayisi;
			}else {
				
				var GirilenHarfSayisi =$scope.google.length;
				var KelimeninHarfSayisi = x.decode.length;
				var SonucRakam = KelimeninHarfSayisi - GirilenHarfSayisi;
				$scope.nmbr = SonucRakam;
				
				
			}
			
		
			
	}
        
	}
    }, 100);
    
    
    
    
  
    
});