module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  // Employee.associate = (models) => { // Caso cada employee possuísse vários address , bastaria declarar seu model da seguinte forma:
  //   Employee.hasMany(models.Address,
  //     { foreignKey: 'employee_id', as: 'addresses' });
  // };

  return Employee;
};

// A função Employee.associate = (models) => {} , que criamos é onde iremos declarar as associações daquele model . No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id , e que o model Employee deve chamar de addresses (note a letra minúscula), como definido na propriedade as .

// Os métodos de criação de associações que o sequelize disponibiliza são:
// hasOne = tem um(Relacionamento 1:1)
// belongsTo = pertence a (Relacionamento 1:1)
// hasMany = tem muitos (Relacionamento 1:N)
// belongsToMany