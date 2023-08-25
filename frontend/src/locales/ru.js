const ru = {
  translation: {
    loginPage: {
      header: 'Войти',
      footer: 'Нет аккаунта?',
      signUpLink: 'Регистрация'
    },
    loginForm: {
      username: 'Ваш ник',
      password: 'Пароль',
      submitButton: 'Войти',
      error: 'Не правильно введен логин/пароль'
    },
    signUpPage: {
      header: 'Регистрация',
      footer: 'Есть аккаунт?',
      loginLink: 'Авторизация'
    },
    signUpForm: {
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      submitButton: 'Зарегистрироваться',
      errors: {
        usernameNotUnique: 'Такой пользователь уже существует',
        unknownError: 'Ошибка при обработке запроса'
      }
    },
    validationMessage: {
      required: 'Обязательное поле',
      confirmPassword: 'Пароли должны совпадать',
      min_one: 'Минимально {{count}} символ',
      min_few: 'Минимально {{count}} символа',
      min_many: 'Минимально {{count}} символов',
      max_one: 'Максимально {{count}} символ',
      max_few: 'Максимально {{count}} символа',
      max_many: 'Максимально {{count}} символов',
    },
    messages: {
      text: 'Введите сообщение...',
      label_one: '{{count}} сообщение',
      label_few: '{{count}} сообщения',
      label_many: '{{count}} сообщений',
    },
    logoutButton: 'Выйти',
    channelsHeader: 'Каналы',
    channelDropdownMenu: {
      remove: 'Удалить',
      rename: 'Переименовать'
    },
    NotFoundPage: {
      header: 'Страница не найдена',
      linkMainPage: 'Но вы можете перейти <1>на главную страницу</1>'
    },
    modals: {
      addChannel: {
        header: 'Добавить канал',
        name: 'Имя канала',
        buttons: {
          submit: 'Отправить',
          cancel: 'Отменить'
        },
        messages: {
          success: 'Канал успешно создан',
          errors: {
            isExist: 'Канал с таким именем уже существует'
          }
        }
      },
      removeChannel: {
        header: 'Удалить канал',
        body: 'Уверены?',
        buttons: {
          submit: 'Удалить',
          cancel: 'Отменить'
        },
        messages: {
          success: 'Канал успешно удалён'
        }
      },
      renameChannel: {
        header: 'Переименовать канал',
        name: 'Имя канала',
        buttons: {
          submit: 'Отправить',
          cancel: 'Отменить'
        },
        messages: {
          success: 'Канал успешно переименован',
          errors: {
            isExist: 'Должно быть уникальным'
          }
        }
      }
    },
    notifications: {
      commonError: 'Ошибка загрузки данных'
    }
  }
};

export default ru;
