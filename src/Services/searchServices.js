import * as httpRequest from '~/Utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        //khi người dùng gõ ký tự giống với ký tự url thì nó mã hóa thành 1 ký tự hợp lệ
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
