// AuthenticationService
//@ → go to the root

import Api from "@/services/Api"

export default {
  register(credentials) {
    return Api().post("register", credentials)
  },
}
