const sequelize = require('./models').sequelize;

const {
    Board,
    Category,
    User,
    Like,
    Reply,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');

module.exports = {
    api : {
        searchInfo : (body, hash, callback) => {
            User.findAll({
                where : { [Op.and]: [{ id : body.id, password : hash }] }
            })
            .then(data => {
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        },
    },

    search : {
        
        id : (body, callback) => {
            User.findAll({
                where: {
                    name : body.user_name,
                    birthday : body.user_birthday,
                    sex : body.user_sex,
                    email : body.user_email
                }
            })
            .then(result => { callback(result) })
            .catch(err => { throw err; })
        },

        pw : (body, callback) => {
            User.findAll({
                where : {
                    id : body.user_id,
                    email : body.user_email
                }
            })
            .then(result => { callback(result) })
            .catch(err => { throw err; })
        }
    },

    add : {
        board : (body, now_date, callback) => {
            Board.create({
                title : body.title,
                contents : body.contents,
                date : now_date,
                view_cnt : 0,
                cat_id : body.category,
                likes : 0,
            })
            .then( () => { callback(true) })
            .catch(err => { throw err; })
        },

        category : (body, callback) => {
            Category.count({
                where : { name : body.name }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                } else {
                    Category.create({
                        name : body.name
                    })
                    .then( () => { callback(true) })
                }
            })
        },

        user : (body, hash_pw, now_date, callback) => {
            
            User.count({
                where : { id : body.id }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                } else {
                    User.create({
                        admin : 'N',
                        id : body.id,
                        password : hash_pw,
                        name : body.name,
                        birthday : body.birthday,
                        sex : body.sex,
                        email : body.email,
                        signup_date : now_date
                    })
                    .then( () => callback(true) );
                }
            })
        },

        reply : (body, now_date, callback) => {
            Reply.create({
                contents : body.contents,
                date : now_date,
                board_id : body.board_id,
                user_id : body.user_id
            })
            .then( () => callback(true) )
            .catch( () => callback(false) )
        }
    },

    update : {
        view_cnt : (body, callback) => {
            Board.update({ view_cnt : sequelize.literal('view_cnt + 1')}, {
                where : { board_id : body.id }
            })
            .then(data => { callback(true) })
            .catch(err => { throw err; })
        },

        password : (body, hash_pw, callback) => {
            User.update({ password : hash_pw }, {
                where : { id : body.user_id }
            })
            .then( () => { callback(true) })
            .catch(err => { throw err; })
        },

        like : (body, callback) => {

            // 게시글의 LIKE 증가 및 감소
            if(body.type === 'add') {
                Board.update({ likes : sequelize.literal('likes + 1')}, {
                    where : { board_id : body.board_id }
                })

                Like.create({
                    board_id : body.board_id,
                    user_id : body.user_id
                })

            } else if(body.type === 'remove') {
                Board.update({ likes : sequelize.literal('likes - 1')}, {
                    where : { board_id : body.board_id }
                })

                Like.destroy({
                    where : { 
                        board_id : body.board_id,
                        user_id : body.user_id
                    }
                })
            }

            callback(true)
        },

        board : (body, callback) => {
            Board.update({
                title : body.title,
                contents : body.contents,
                cat_id : body.category
            }, {
                where : { board_id : body.board_id }
            })
            .then( () => { callback(true) })
            .catch(err => { throw err; })
        }
    },

    delete : {
        category : (body, callback) => {
            Category.destroy({
                where : { id : body.id }
            })
            .then( () => {
                Board.update({ cat_id : 0 }, {
                    where : { cat_id : body.id }
                })
                .then( () => { callback(true) })
                .catch(err => { throw err; })
            })
        },

        board : (body, callback) => {
            Board.destroy({
                where : { board_id : body.board_id }
            })
            .then( () => { callback(true) })
            .catch(err => { throw err; })
        },
         
        reply : (body, callback) => {
            Reply.destroy({
                where : { reply_id : body.reply_id }
            })
            .then( () => { callback(true) })
            .catch(err => { throw err; })
        }
    },

    modify : {
        category : (body, callback) => {
            Category.count({
                where : { name : body.name }
            })
            .then(cnt => {
                console.log(cnt)
                if(cnt > 0) {
                    callback(false);
                    
                } else {
                    Category.update({ name : body.name }, {
                        where : { id : body.id }
                    })
                    .then( () => { callback(true) })
                    .catch(err => { throw err; })
                }
            })
        }
    },


    get : {
        board : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }

            let where_1 = body.category;
            let where_2 = '';
                        
            if(!body.category) {
            // 전체보기를 클릭했을 경우
                 where_2 = 0;
            
            } else if(body.category) {
            // 카테고리를 클릭했을 경우
                 where_2 = null;
            }

            Board.findAll({
                where : {
                    title : { [Op.like] : search },
                    contents : { [Op.like] : search },
                    cat_id : {
                        [Op.or] : {
                            [Op.eq] : where_1,
                            [Op.gt] : where_2
                        }
                    }
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('board_id DESC')
                })
            .then(data => { callback(data) })
            .catch(err => { throw err; })
        },

        board_cnt : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }

            let where_1 = body.category;
            let where_2 = '';
                        
            if(!body.category) {
            // 전체보기를 클릭했을 경우
                 where_2 = 0;
            
            } else if(body.category) {
            // 카테고리를 클릭했을 경우
                 where_2 = null;
            }
    
            Board.count({
                where : {
                    title : { [Op.like] : search },
                    contents : { [Op.like] : search },
                    cat_id : {
                        [Op.or] : {
                            [Op.eq] : where_1,
                            [Op.gt] : where_2
                        }
                    }
                },
            })
            .then(result => {
                callback(result);
            })
        },

        board_data : (body, callback) => {
            Board.findAll({
                where : { board_id : body.id }
            })
            .then(result => {
                callback(result);
            })
            .catch(err => {
                throw err;
            })
        },

        category : (callback) => {
            Category.findAll()
            .then(result => { callback(result); })
            .catch(err => { throw err; })
        },

        pre_and_next : (body, callback) => {
            let result = {};

            let where_1 = body.category;
            let where_2 = '';
                        
            if(!body.category) {
            // 전체보기를 클릭했을 경우
                 where_2 = 0;
            
            } else if(body.category) {
            // 카테고리를 클릭했을 경우
                 where_2 = null;
            }

            Board.findAll({
                // 다음글 구하기
                where : {
                    board_id : {
                        [Op.gt] : body.board_id
                    },
                    cat_id : {
                        [Op.or] : {
                            [Op.eq] : where_1,
                            [Op.gt] : where_2
                        }
                    }
                },
                limit : 1

            }).then(
                next => {
                    result['next'] = next;

                    // 이전글 구하기
                    Board.findAll({
                        where : {
                            board_id : {
                                [Op.lt] : body.board_id
                            },
                            cat_id : {
                                [Op.or] : {
                                    [Op.eq] : where_1,
                                    [Op.gt] : where_2
                                }
                            }
                        },
                        limit : 1,
                        order: sequelize.literal('board_id DESC')
                    })
                    .then(
                        pre => {
                            result['pre'] = pre;
                            callback(result);
                        }
                    )
                }
            )
        }, // get.pre_and_next 끝

        reply_data : (body, callback) => {
            let result = {};

            // 전체 데이터 수 구하기
            Reply.count({
                where : {
                    board_id : body.board_id
                }
            })
            .then( (cnt_result) => {
                result['count'] = cnt_result
            })
            .catch(err => { throw err; })

            //
            Reply.findAll({
                include : [
                    {
                        model : User,
                        //attributes : ['id']
                    }
                ],
                where : { board_id : body.board_id },
                limit : body.reply_limit,
                offset : (body.reply_page - 1) * body.reply_limit,
            })
            .then( (data_result) => {
                result['rows'] = data_result

                callback(result) 
            })
            .catch(err => { throw err; })
        },
    },

    check : {
        like : (body, callback) => {
            Like.findAll({
                where : { 
                    board_id : body.board_id,
                    user_id : body.user_id
                }
            })
            .then(result => { callback(result) })
            .catch(err => { throw err; })
        }
    }
    


    
        /*
        getData : callback => {
            Teacher.findAll()
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },

        addData : (body, callback) => {
            Teacher.create({
                name : body.data
            })
            .then( result => {
                callback(result)
            })
            .catch( err => {
                console.log(err)
                throw err;
            })
        },

        modifyData : (body, callback) => {
            Teacher.update({ name : body.modify.name }, {
                where : { id : body.modify.id }
            })
            .then( result => { callback(result) })
            .catch( err => { throw err })
        },

        deleteData : (body, callback) => {
            Teacher.destroy({
                where : { id : body.delete.id }
            })
            .then( callback(true) )
            .catch( err => { throw err })
        }
        */
}