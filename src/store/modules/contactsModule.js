const appModule = {
  namespaced: true,
  state: () => ({
    dean: {
      img: require('../../assets/images/contacts/unsplash_v2aKnjMbP_k.png'),
      name: 'Капитонов Александр Александрович',
      position: 'Декан факультета',
      email: 'kapitonov.aleksandr@itmo.ru',
      tel: '+7 (812) 457-15-35'
    },
    contacts:[
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана по учебному процессу',
        email: 'anna.z.arseneva@itmo.ru'
      },
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Башкина Ирина Александровна',
        position: 'Помощник декана',
        email: 'bashkina@itmo.ru'
      },
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Кузнецов Павел Александрович',
        position: 'Ответственный за прием абитуриентов, куратор практики',
        email: 'pakuznetsov@itmo.ru'
      },
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Павлович Яна Александровна',
        position: 'Менеджер по связям с общественностью',
        email: 'yana.pavlovich@itmo.ru'
      }
    ],
    office:[
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Харьковская Татьяна Александровна',
        position: 'Руководитель учебного офиса',
        email: 'tatiana.kharkovskaia@itmo.ru'
      },
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Говорова Марина Михайловна',
        position: 'Менеджер',
        email: 'mmgovorova@itmo.ru'
      },
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Деркунская Светлана',
        position: 'Менеджер',
        email: 'sderkunskaia@itmo.ru'
      },
      {
        img: require('../../assets/images/home/homeHeader/unsplash_FcLyt7lW5wg.png'),
        name: 'Ларионова Александра Сергеевна',
        position: 'Менеджер',
        email: 'as_larionova@itmo.ru'
      }
    ]
  })
}
export default appModule