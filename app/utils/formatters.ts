export class ScssUtils {
   static pxToRem(px: number) {
      return px / 16 + "rem";
   }

   static pxToEm(px: number) {
      return px / 16 + "em";
   }
}
