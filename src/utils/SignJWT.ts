// import jwt from 'jsonwebtoken';
// import { Configuration } from '../utils/config';

// const SignJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
//     var timeSinceEpoch = new Date().getTime();
//     var expirationTime = timeSinceEpoch + 3600 * 100000;
//     var expirationTimeInSeconds = Math.floor(expirationTime / 1000)

//     try {
//         jwt.sign(
//             {
//                 username: user.username
//             },
//             Configuration.get('SERVER_TOKEN_SECRET'),
//             {
//                 issuer: 'OnlyForGood',
//                 algorithm: 'HS256',
//                 // expiresIn: expirationTimeInSeconds
//             },
//             (error, token) => {
//                 if (error) {
//                     callback(error, null);
//                 } else if (token) {
//                     callback(null, token);
//                 }
//             }
//         );
//     } catch (error) {
//         callback(error, null);
//     }
// };

// export default SignJWT;
