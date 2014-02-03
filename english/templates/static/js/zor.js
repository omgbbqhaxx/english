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
			code: 'compete',
                        decode : 'rekabet etmek'
			
		},
		{
			id: 1,
			code: 'booking',
			decode : 'rezervasyon'
		},
                {
			id: 2,
			code: 'export',
			decode : 'ihraç etmek'
		},
                {
			id: 3,
			code: 'saptamak',
			decode : 'detect'
		},
                {
			id: 4,
			code: 'permit',
			decode : 'izin'
		},
                {
			id: 5,
			code: 'encourage',
			decode : 'teşvik etmek'
		}, 
                {
			id: 6,
			code: 'erkek yeğen',
			decode : 'nephew'
		},
                {
			id: 7,
			code: 'moaning',
			decode : 'inleten'
		},
                {
			id: 8,
			code: 'parlak',
			decode : 'shiny'
		},
                {
			id: 9,
			code: 'şube',
			decode : 'branch'
		},
                {
			id: 10,
			code: 'sincap',
			decode : 'squirrel'
		},
                 {
			id: 11,
			code: 'concrete',
			decode : 'somut'
		},
                 {
			id: 12,
			code: 'tam zamanında',
			decode : 'right on time'
		},
                {
			id: 13,
			code: 'scientific',
			decode : 'bilimsel'
		},
                {
			id: 14,
			code: 'çalışma masası',
			decode : 'desk'
		},
                {
			id: 15,
			code: 'colorful',
			decode : 'renkli'
		},
                {
			id: 16,
			code: 'thunderstorm',
			decode : 'fırtına'
		},
                {
			id: 17,
			code: 'interesting',
			decode : 'ilgi çekici'
		},
                {
			id: 18,
			code: 'reinforce',
			decode : 'güçlendirmek'
		},
                 {
			id: 19,
			code: 'sempatik',
			decode : 'sympathetic'
		},
                 {
			id: 20,
			code: 'kurbağa',
			decode : 'frog'
		},        
                 {
			id: 21,
			code: 'anlayışlı',
			decode : 'thoughtful'
		},        
                 {
			id: 22,
			code: 'leg',
			decode : 'bacak'
		},        
                 {
			id: 23,
			code: 'detect',
			decode : 'belirlemek'
		}
		,        
                 {
			id: 24,
			code: 'attractive',
			decode : 'cazibeli'
		}
		,        
                 {
			id: 25,
			code: 'fiş',
			decode : 'plug'
		}
		,        
                 {
			id: 26,
			code: 'doormat',
			decode : 'paspas'
		}
		,        
                 {
			id: 27,
			code: 'special',
			decode : 'özel'
		}
		,        
                 {
			id: 28,
			code: 'stomach',
			decode : 'karın'
		}
		,        
                 {
			id: 29,
			code: 'takım elbise',
			decode : 'suit'
		}
		,        
                 {
			id: 30,
			code: 'angry',
			decode : 'kızgın'
		}
		,        
                 {
			id: 31,
			code: 'surprising',
			decode : 'şaşırtıcı'
		}
		,        
                 {
			id: 32,
			code: 'awful',
			decode : 'berbat'
		}
		,        
                 {
			id: 33,
			code: 'annoyed',
			decode : 'sinirli'
		}
		,        
                 {
			id: 34,
			code: 'farklı',
			decode : 'different'
		}
		,        
                 {
			id: 35,
			code: 'obvious',
			decode : 'apaçık'
		}
		,        
                 {
			id: 36,
			code: 'unhappy',
			decode : 'mutsuz'
		}
		,        
                 {
			id: 37,
			code: 'encourage',
			decode : 'cesaretlendirmek'
		}
		,        
                 {
			id: 38,
			code: 'memnun',
			decode : 'grateful'
		}
		,        
                 {
			id: 39,
			code: 'felaket',
			decode : 'disaster'
		}
		,        
                 {
			id: 40,
			code: 'kaba',
			decode : 'unkind'
		}
		,        
                 {
			id: 41,
			code: 'spicy',
			decode : 'baharatlı'
		}
		,        
                 {
			id: 42,
			code: 'yatkınlık',
			decode : 'aptitude'
		}
		,        
                 {
			id: 43,
			code: 'among',
			decode : 'arasında'
		}
		,        
                 {
			id: 44,
			code: 'stairs',
			decode : 'merdiven'
		}
		,        
                 {
			id: 45,
			code: 'salty',
			decode : 'tuzlu'
		}
		,        
                 {
			id: 46,
			code: 'joyous',
			decode : 'sevinçli'
		}
		,        
                 {
			id: 47,
			code: 'fancy',
			decode : 'süslü'
		}
		,        
                 {
			id: 48,
			code: 'famous',
			decode : 'ünlü'
		}
		,        
                 {
			id: 49,
			code: 'emekli',
			decode : 'retired'
		}
		,        
                 {
			id: 50,
			code: 'silent',
			decode : 'sessiz'
		}
		,        
                 {
			id: 51,
			code: 'sonuç',
			decode : 'result'
		}
		,        
                 {
			id: 52,
			code: 'worried',
			decode : 'endişelenmiş'
		}
		,        
                 {
			id: 53,
			code: 'step mother',
			decode : 'üvey anne'
		}
		,        
                 {
			id: 54,
			code: 'harika',
			decode : 'wonderful'
		}
		,        
                 {
			id: 55,
			code: 'variant',
			decode : 'değişiklik gösteren'
		},        
                 {
			id: 56,
			code: 'baharatlı',
			decode : 'spicy'
		},        
                 {
			id: 57,
			code: 'mırıltı',
			decode : 'purring'
		},        
                 {
			id: 58,
			code: 'fore finger',
			decode : 'işaret parmağı'
		},        
                 {
			id: 59,
			code: 'omuz',
			decode : 'shoulder'
		},        
                 {
			id: 60,
			code: 'stairs',
			decode : 'merdiven'
		},        
                 {
			id: 61,
			code: 'international',
			decode : 'uluslararası'
		},        
                 {
			id: 62,
			code: 'juicy',
			decode : 'sulu'
		},        
                 {
			id: 63,
			code: 'tehlikeli',
			decode : 'dangerous'
		},        
                 {
			id: 64,
			code: 'hoşgörülü',
			decode : 'tolerant'
		},        
                 {
			id: 65,
			code: 'karanlık',
			decode : 'dark'
		},        
                 {
			id: 66,
			code: 'mum',
			decode : 'candle'
		},        
                 {
			id: 67,
			code: 'demonstration',
			decode : 'gösteri'
		},        
                 {
			id: 68,
			code: 'tören',
			decode : 'ceremony'
		},        
                 {
			id: 69,
			code: 'icy',
			decode : 'buz gibi'
		},        
                 {
			id: 70,
			code: 'köstebek',
			decode : 'mole'
		},        
                 {
			id: 71,
			code: 'mutlu',
			decode : 'blissful'
		},        
                 {
			id: 72,
			code: 'compete',
			decode : 'rekabet etmek'
		},        
                 {
			id: 73,
			code: 'musluk',
			decode : 'tap'
		},        
                 {
			id: 74,
			code: 'tiring',
			decode : 'yorucu'
		},        
                 {
			id: 75,
			code: 'successful',
			decode : 'başarılı'
		},        
                 {
			id: 76,
			code: 'zealous',
			decode : 'gayretli'
		},        
                 {
			id: 77,
			code: 'ekşi',
			decode : 'sour'
		},        
                 {
			id: 78,
			code: 'saygı',
			decode : 'respect'
		},        
                 {
			id: 79,
			code: 'inançlı',
			decode : 'faithful'
		},        
                 {
			id: 80,
			code: 'bathtub',
			decode : 'küvet'
		},        
                 {
			id: 81,
			code: 'gözkapağı',
			decode : 'eyelid'
		},        
                 {
			id: 82,
			code: 'grocer',
			decode : 'bakkal'
		},        
                 {
			id: 83,
			code: 'tenant',
			decode : 'kiracı'
		},        
                 {
			id: 84,
			code: 'worrying',
			decode : 'endişelendirici'
		},        
                 {
			id: 85,
			code: 'obvious',
			decode : 'apaçık'
		},        
                 {
			id: 86,
			code: 'sticky',
			decode : 'yapışkan'
		},        
                 {
			id: 87,
			code: 'kiremit',
			decode : 'roof tile'
		},        
                 {
			id: 88,
			code: 'bookcase',
			decode : 'kitaplık'
		},        
                 {
			id: 89,
			code: 'tutku',
			decode : 'passion'
		},        
                 {
			id: 90,
			code: 'pullover',
			decode : 'kazak'
		},        
                 {
			id: 91,
			code: 'hakim',
			decode : 'judge'
		},        
                 {
			id: 92,
			code: 'dik',
			decode : 'steep'
		},        
                 {
			id: 93,
			code: 'god',
			decode : 'tanrı'
		},        
                 {
			id: 94,
			code: 'kız yeğen',
			decode : 'niece'
		},        
                 {
			id: 95,
			code: 'izin vermek',
			decode : 'permit'
		},        
                 {
			id: 96,
			code: 'sık',
			decode : 'frequent'
		},        
                 {
			id: 97,
			code: 'sevecen',
			decode : 'kind'
		},        
                 {
			id: 98,
			code: 'grieving',
			decode : 'kederli'
		},        
                 {
			id: 99,
			code: 'mutsuz',
			decode : 'unhappy'
		},        
                 {
			id: 100,
			code: 'eldiven',
			decode : 'glove'
		},        
                 {
			id: 101,
			code: 'cardigan',
			decode : 'hırka'
		},        
                 {
			id: 102,
			code: 'necessary',
			decode : 'gerekli'
		},        
                 {
			id: 103,
			code: 'gloomy',
			decode : 'kasvetli'
		},        
                 {
			id: 104,
			code: 'leylek',
			decode : 'stork'
		},        
                 {
			id: 105,
			code: 'facility',
			decode : 'tesis'
		},        
                 {
			id: 106,
			code: 'refah',
			decode : 'prosperity'
		},        
                 {
			id: 107,
			code: 'ashtray',
			decode : 'kül tablası'
		},        
                 {
			id: 108,
			code: 'tolerant',
			decode : 'hoşgörülü'
		},        
                 {
			id: 109,
			code: 'dikkatsiz',
			decode : 'careless'
		},        
                 {
			id: 110,
			code: 'rotten',
			decode : 'çürük'
		},        
                 {
			id: 111,
			code: 'flat',
			decode : 'düz'
		},        
                 {
			id: 112,
			code: 'makale',
			decode : 'article'
		},        
                 {
			id: 113,
			code: 'typical',
			decode : 'tipik'
		},        
                 {
			id: 114,
			code: 'annoyed',
			decode : 'sinirli'
		},        
                 {
			id: 115,
			code: 'sıçan',
			decode : 'rat'
		},        
                 {
			id: 116,
			code: 'cerrah',
			decode : 'surgeon'
		},        
                 {
			id: 117,
			code: 'yörünge',
			decode : 'orbit'
		},        
                 {
			id: 118,
			code: 'tüyler ürpertici',
			decode : 'creepy'
		},        
                 {
			id: 119,
			code: 'sönük',
			decode : 'faint'
		},        
                 {
			id: 120,
			code: 'waist',
			decode : 'bel'
		},        
                 {
			id: 121,
			code: 'anlayışlı',
			decode : 'thoughtful'
		},        
                 {
			id: 122,
			code: 'terrace',
			decode : 'teras'
		},        
                 {
			id: 123,
			code: 'passive',
			decode : 'pasif'
		},        
                 {
			id: 124,
			code: 'active',
			decode : 'aktif'
		},        
                 {
			id: 125,
			code: 'balance',
			decode : 'denge'
		},        
                 {
			id: 126,
			code: 'kind',
			decode : 'nazik'
		},        
                 {
			id: 127,
			code: 'espirili',
			decode : 'witty'
		},        
                 {
			id: 128,
			code: 'heel',
			decode : 'topuk'
		},        
                 {
			id: 129,
			code: 'hell',
			decode : 'cehennem'
		},        
                 {
			id: 130,
			code: 'fore finger',
			decode : 'işaret parmağı'
		},        
                 {
			id: 131,
			code: 'shoulder',
			decode : 'omuz'
		},        
                 {
			id: 132,
			code: 'nephew',
			decode : 'erkek yeğen'
		},        
                 {
			id: 133,
			code: 'koltuk',
			decode : 'seat'
		},        
                 {
			id: 134,
			code: 'comfortable',
			decode : 'rahat'
		},        
                 {
			id: 135,
			code: 'get',
			decode : 'almak'
		},        
                 {
			id: 136,
			code: 'attract',
			decode : 'cezbetmek'
		},        
                 {
			id: 137,
			code: 'catch',
			decode : 'yakalamak'
		},        
                 {
			id: 138,
			code: 'seçmek',
			decode : 'select'
		},        
                 {
			id: 139,
			code: 'possible',
			decode : 'mümkün'
		},        
                 {
			id: 140,
			code: 'patience',
			decode : 'sabır'
		},        
                 {
			id: 141,
			code: 'rahat',
			decode : 'comfortable'
		},        
                 {
			id: 142,
			code: 'gardener',
			decode : 'bahçıvan'
		},        
                 {
			id: 143,
			code: 'contain',
			decode : 'içermek'
		},        
                 {
			id: 144,
			code: 'stork',
			decode : 'leylek'
		},        
                 {
			id: 145,
			code: 'wardrobe',
			decode : 'gardrop'
		},        
                 {
			id: 146,
			code: 'kiremit',
			decode : 'roof tile'
		},        
                 {
			id: 147,
			code: 'just',
			decode : 'sadece'
		},        
                 {
			id: 148,
			code: 'someone',
			decode : 'birisi'
		},        
                 {
			id: 149,
			code: 'exception',
			decode : 'istisna'
		},        
                 {
			id: 150,
			code: 'put',
			decode : 'koymak'
		},        
                 {
			id: 151,
			code: 'startups',
			decode : 'başlangıç'
		},        
                 {
			id: 152,
			code: 'around',
			decode : 'etrafında'
		},        
                 {
			id: 153,
			code: 'which',
			decode : 'hangi'
		},        
                 {
			id: 154,
			code: 'witch',
			decode : 'cadı'
		},        
                 {
			id: 155,
			code: 'audience',
			decode : 'seyirci'
		},        
                 {
			id: 156,
			code: 'union',
			decode : 'sendika'
		},        
                 {
			id: 157,
			code: 'sanayi',
			decode : 'industry'
		},        
                 {
			id: 158,
			code: 'really',
			decode : 'sahiden'
		},        
                 {
			id: 159,
			code: 'news',
			decode : 'haber'
		},        
                 {
			id: 160,
			code: 'involved',
			decode : 'ilgili'
		},        
                 {
			id: 161,
			code: 'çeşitli',
			decode : 'various'
		},        
                 {
			id: 162,
			code: 'story',
			decode : 'hikaye'
		},        
                 {
			id: 163,
			code: 'those',
			decode : 'bu'
		},        
                 {
			id: 164,
			code: 'follow',
			decode : 'takip etmek'
		},        
                 {
			id: 165,
			code: 'could',
			decode : 'olabilir'
		},        
                 {
			id: 166,
			code: 'possibly',
			decode : 'belki'
		},        
                 {
			id: 167,
			code: 'broader',
			decode : 'daha geniş'
		},        
                 {
			id: 168,
			code: 'impact',
			decode : 'darbe'
		},        
                 {
			id: 169,
			code: 'spread',
			decode : 'yayılmış'
		},        
                 {
			id: 170,
			code: 'kazanılmış',
			decode : 'gotten'
		},        
                 {
			id: 171,
			code: 'akım',
			decode : 'trend'
		},        
                 {
			id: 172,
			code: 'ileri',
			decode : 'forward'
		},        
                 {
			id: 173,
			code: 'means',
			decode : 'araç'
		},        
                 {
			id: 174,
			code: 'anlamına gelmek',
			decode : 'mean'
		},        
                 {
			id: 175,
			code: 'belki',
			decode : 'maybe'
		},        
                 {
			id: 176,
			code: 'download',
			decode : 'indir'
		},        
                 {
			id: 177,
			code: 'interest',
			decode : 'ilgisini çekmek'
		},        
                 {
			id: 178,
			code: 'care',
			decode : 'ilgilenmek'
		},        
                 {
			id: 179,
			code: 'too',
			decode : 'çok'
		},        
                 {
			id: 180,
			code: 'recover',
			decode : 'kurtarmak'
		},        
                 {
			id: 181,
			code: 'collect',
			decode : 'toplamak'
		},        
                 {
			id: 182,
			code: 'meet',
			decode : 'tanışmak'
		},        
                 {
			id: 183,
			code: 'date',
			decode : 'tarih'
		},        
                 {
			id: 184,
			code: 'wake',
			decode : 'uyanmak'
		},        
                 {
			id: 185,
			code: 'ayarlamak',
			decode : 'reset'
		},        
                 {
			id: 186,
			code: 'requisite',
			decode : 'gerekli'
		},        
                 {
			id: 187,
			code: 'leverage',
			decode : 'baskı'
		},        
                 {
			id: 188,
			code: 'extort',
			decode : 'koparmak'
		},        
                 {
			id: 189,
			code: 'excellent',
			decode : 'mükkemmel'
		},        
                 {
			id: 190,
			code: 'ensuing',
			decode : 'sonraki'
		},        
                 {
			id: 191,
			code: 'outrage',
			decode : 'rezalet'
		},        
                 {
			id: 192,
			code: 'lax',
			decode : 'gevşek'
		},        
                 {
			id: 193,
			code: 'denials',
			decode : 'inkar'
		},        
                 {
			id: 194,
			code: 'culpability',
			decode : 'suçluluk'
		},        
                 {
			id: 195,
			code: 'fact',
			decode : 'gerçek'
		},        
                 {
			id: 196,
			code: 'require',
			decode : 'gerektirir'
		},        
                 {
			id: 197,
			code: 'matter',
			decode : 'konu'
		},        
                 {
			id: 198,
			code: 'malzeme',
			decode : 'material'
		},        
                 {
			id: 199,
			code: 'stok',
			decode : 'stock'
		},        
                 {
			id: 200,
			code: 'mağaza',
			decode : 'store'
		},        
                 {
			id: 201,
			code: 'hapishane',
			decode : 'prison'
		},        
                 {
			id: 202,
			code: 'kodes',
			decode : 'jail'
		},        
                 {
			id: 203,
			code: 'hoplamak',
			decode : 'jig'
		},        
                 {
			id: 204,
			code: 'zamanından önce',
			decode : 'prematurely'
		},        
                 {
			id: 205,
			code: 'iddia',
			decode : 'claim'
		},        
                 {
			id: 206,
			code: 'gave',
			decode : 'verdi'
		},        
                 {
			id: 207,
			code: 'digit',
			decode : 'basamak'
		},        
                 {
			id: 208,
			code: 'expectation',
			decode : 'beklenti'
		},        
                 {
			id: 209,
			code: 'gender',
			decode : 'cinsiyet'
		},        
                 {
			id: 210,
			code: 'eşik',
			decode : 'threshold'
		},        
                 {
			id: 211,
			code: 'yüksek',
			decode : 'higher'
		},        
                 {
			id: 212,
			code: 'serseri',
			decode : 'bummer'
		},        
                 {
			id: 213,
			code: 'güvenlik',
			decode : 'security'
		},        
                 {
			id: 214,
			code: 'azaltmak',
			decode : 'reduce'
		},        
                 {
			id: 215,
			code: 'gelecek',
			decode : 'future'
		},        
                 {
			id: 216,
			code: 'ulaşmak',
			decode : 'reach'
		},        
                 {
			id: 217,
			code: 'ancak',
			decode : 'barely'
		},        
                 {
			id: 218,
			code: 'fırlatmak',
			decode : 'throw'
		},        
                 {
			id: 219,
			code: 'hüsran',
			decode : 'frustration'
		},        
                 {
			id: 220,
			code: 'hükmetmek',
			decode : 'dominate'
		},        
                 {
			id: 221,
			code: 'garip',
			decode : 'odd'
		},        
                 {
			id: 222,
			code: 'seemingly',
			decode : 'görünüşte'
		},        
                 {
			id: 223,
			code: 'aldatıcı',
			decode : 'deceptively'
		},        
                 {
			id: 224,
			code: 'görünüm',
			decode : 'appearance'
		},        
                 {
			id: 225,
			code: 'harken',
			decode : 'kulak vermek'
		},        
                 {
			id: 226,
			code: 'aslında',
			decode : 'actually'
		},        
                 {
			id: 227,
			code: 'involve',
			decode : 'dahil'
		},        
                 {
			id: 228,
			code: 'mix',
			decode : 'karıştırmak'
		},        
                 {
			id: 229,
			code: 'confuse',
			decode : 'şaşırtmak'
		},        
                 {
			id: 230,
			code: 'nothing',
			decode : 'hiçbir şey'
		},        
                 {
			id: 231,
			code: 'tapping',
			decode : 'tıklatma'
		},        
                 {
			id: 232,
			code: 'challenge',
			decode : 'meydan okuma'
		},        
                 {
			id: 233,
			code: 'impossible',
			decode : 'imkânsız'
		},        
                 {
			id: 234,
			code: 'beceri',
			decode : 'skill'
		},        
                 {
			id: 235,
			code: 'capability',
			decode : 'kabiliyet'
		},        
                 {
			id: 236,
			code: 'urge',
			decode : 'dürtü'
		},        
                 {
			id: 237,
			code: 'discuss',
			decode : 'tartışmak'
		},        
                 {
			id: 238,
			code: 'enjoy',
			decode : 'zevk almak'
		},        
                 {
			id: 239,
			code: 'ipek',
			decode : 'silk'
		},        
                 {
			id: 240,
			code: 'retro',
			decode : 'geriye'
		},        
                 {
			id: 241,
			code: 'golden',
			decode : 'altın'
		},        
                 {
			id: 242,
			code: 'kalmak',
			decode : 'stay'
		},        
                 {
			id: 243,
			code: 'anonim',
			decode : 'anonymous'
		},        
                 {
			id: 244,
			code: 'developer',
			decode : 'geliştirici'
		},        
                 {
			id: 245,
			code: 'junior',
			decode : 'genç'
		},        
                 {
			id: 246,
			code: 'uygulama',
			decode : 'application'
		},        
                 {
			id: 247,
			code: 'invest',
			decode : 'yatırım yapmak'
		},        
                 {
			id: 248,
			code: 'Block',
			decode : 'engel'
		},        
                 {
			id: 249,
			code: 'madalya',
			decode : 'medal'
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
		  $("#kelime").html('<h5>'+ cevap +'</h5>Skorunu paylaş<br><hr><a class="btnx btnx-tweet" href="https://twitter.com/intent/tweet?text='+ cevap +'&via=ogreningilizce">Twitter</a><a class="btnx btnx-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://ingilizce-kelime-ogren.com">Facebook</a><a class="btnx btnx-google" href="https://plus.google.com/share?url=http://ingilizce-kelime-ogren.com">Google+</a>');
		  },
		  });
		
		  });
	  	  	    
    });
		
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