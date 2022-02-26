<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employees</p>
        <p class="fst-italic">
          Seja tudo o quiser ser, mas, acima de tudo, seja você sempre. Só
          existe um êxito: a capacidade de levar a vida que se quer. A
          vitalidade é demonstrada não apenas pela persistência, mas pela
          capacidade de começar de novo. A coragem não é ausência do medo; é a
          persistência apesar do medo.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li
            v-for="employee of employees"
            :key="employee.id"
            class="list-group-item list-group-item-success"
          >
            <input
              @change="updateSelected(employee.id)"
              type="checkbox"
              class="form-check-input"
            />
            {{ employee.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-for="employee of employees" :key="employee.id">
          <div class="card my-2" v-if="employee.isSelected">
            <div class="card-body list-group-item-success">
              <ul class="list-group">
                <li class="list-group-item">
                  Id: <span class="fw-bold">{{ employee.id }}</span>
                </li>
                <li class="list-group-item">
                  Name: <span class="fw-bold">{{ employee.name }}</span>
                </li>
                <li class="list-group-item">
                  E-mail: <span class="fw-bold">{{ employee.email }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EmployeeService } from "../../services/EmployeeService";

export default {
  name: "VuexEmployees",
  data: function () {
    return {
      employees: EmployeeService.getAllEmployees(),
    };
  },
  methods: {
    updateSelected: function (empId) {
      this.employees = this.employees.map((employee) => {
        if (employee.id === empId) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else return employee;
      });
    },
  },
};
</script>     

<style>
</style>