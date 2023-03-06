export const setNotificationPayload = (
  reqStatus: 'pending' | 'success' | 'error' | undefined,
  reqErrorMsg: string | undefined
) => {

  if (!reqStatus) return null;

  const payloads = {
    pending: () => ({
      status: reqStatus,
      title: 'Sending Message',
      message: 'Your message is on its way'
    }),
    success: () => ({
      status: reqStatus,
      title: 'Success',
      message: 'Message sent succesfully'
    }),
    error: () => ({
      status: reqStatus,
      title: 'Error!',
      message: reqErrorMsg as string
    }),
  }

  return payloads[reqStatus]();
};