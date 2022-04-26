import Vue from 'vue';

const userStore =
{
	namespaced: true, // делает модоль более разделенными независимыми без глобальной области видимости
	state:
	{
		list:
		{
			1:
			{
				name: 'Amiran',
				age: 33
			}
		}
	},
	mutations:
	{
		ADD_USER(state, user)
		{
			Vue.set(state.list, user.id, user) // если мы хотим изменить в стате вложенный обьект
		}
	},
	actions:
	{
		addNewUser({commit}, user)
		{
			const newUser = {...user, id: String(Math.floor(Math.random() * 100))};
			commit('ADD_USER',newUser)
		}
	},
	getters:
	{
		//users: ({list}) => Object.values(list),//деструктуризация 1способ
		user(state)
		{
			return Object.values(state.list);//преобразуем обьект в массив
		}
	}
}

export default userStore;