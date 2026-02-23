import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./rootApi";

import { retailUserProfile } from "./retailUserProfile";
import { retailUserProfileResetDevice } from "./retailUserProfileResetDevice";
import { retailUserProfileUpdateCustomerName } from "./retailUserProfileUpdateCustomerName";
import { retailUserProfileUpdateUsername } from "./retailUserProfileUpdateUsername";
import { retailUserProfileUpdatePhoneNumber } from "./retailUserProfileUpdatePhoneNumber";
import { retailUserProfileUpdateDefaultEmail } from "./retailUserProfileUpdateDefaultEmail";
import { retailUserProfileUpdateTokenStatus } from "./retailUserProfileUpdateTokenStatus";
import { retailUserProfileTokenResetTrycount } from "./retailUserProfileTokenResetTrycount";
import { retailUserProfileCustomersUpdateTransactionLimit } from "./retailUserProfileCustomersUpdateTransactionLimit";
import { retailUserProfileDeactivateAccount } from "./retailUserProfileDeactivateAccount";
import { retailUserProfileActivateAccount } from "./retailUserProfileActivateAccount";
import { retailUserProfileUpdateCustomerPhoneNumber } from "./retailUserProfileUpdateCustomerPhoneNumber";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [retailUserProfile.reducerPath]: retailUserProfile.reducer,
    [retailUserProfileResetDevice.reducerPath]:
      retailUserProfileResetDevice.reducer,
    [retailUserProfileUpdateCustomerName.reducerPath]:
      retailUserProfileUpdateCustomerName.reducer,
    [retailUserProfileUpdateUsername.reducerPath]:
      retailUserProfileUpdateUsername.reducer,
    [retailUserProfileUpdatePhoneNumber.reducerPath]:
      retailUserProfileUpdatePhoneNumber.reducer,
    [retailUserProfileUpdateDefaultEmail.reducerPath]:
      retailUserProfileUpdateDefaultEmail.reducer,
    [retailUserProfileUpdateTokenStatus.reducerPath]:
      retailUserProfileUpdateTokenStatus.reducer,
    [retailUserProfileTokenResetTrycount.reducerPath]:
      retailUserProfileTokenResetTrycount.reducer,
    [retailUserProfileCustomersUpdateTransactionLimit.reducerPath]:
      retailUserProfileCustomersUpdateTransactionLimit.reducer,
    [retailUserProfileDeactivateAccount.reducerPath]:
      retailUserProfileDeactivateAccount.reducer,
    [retailUserProfileActivateAccount.reducerPath]:
      retailUserProfileActivateAccount.reducer,
    [retailUserProfileUpdateCustomerPhoneNumber.reducerPath]:
      retailUserProfileUpdateCustomerPhoneNumber.reducer,
  },
  middleware: (getDefault) =>
    getDefault()
      .concat(authApi.middleware)
      .concat(retailUserProfile.middleware)
      .concat(retailUserProfileResetDevice.middleware)
      .concat(retailUserProfileUpdateCustomerName.middleware)
      .concat(retailUserProfileUpdateUsername.middleware)
      .concat(retailUserProfileUpdateDefaultEmail.middleware)
      .concat(retailUserProfileUpdatePhoneNumber.middleware)
      .concat(retailUserProfileUpdateTokenStatus.middleware)
      .concat(retailUserProfileTokenResetTrycount.middleware)
      .concat(retailUserProfileCustomersUpdateTransactionLimit.middleware)
      .concat(retailUserProfileDeactivateAccount.middleware)
      .concat(retailUserProfileActivateAccount.middleware)
      .concat(retailUserProfileUpdateCustomerPhoneNumber.middleware),
});
