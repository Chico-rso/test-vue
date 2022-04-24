const userStore =
{
	namespaced: true, // делает модолу более разделенными независимыми без глобальной области видимости
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
	actions:
	{},
	mutations:
	{},
	getters:
	{
		//users: ({list}) => Object.values(list),//деструктуризация 1способ
		user(state)
		{
			return state.list;
		}
	}
}

export default userStore;