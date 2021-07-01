<template>
    <h3 class="p-3 text-center">
       Profile Details
    </h3>
    <div class="container">
        <table class="table table-striped table-bordered">
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Password</th>
            </tr>
            <tr>
                <th scope="col">{{ user.id }}</th>
                <td>{{ user.first_name }} {{ user.last_name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.password }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>