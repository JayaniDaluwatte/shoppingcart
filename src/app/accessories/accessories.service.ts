import { Injectable } from '@angular/core';
import { Accessory } from "app/accessories/accessory";

@Injectable()
export class AccessoriesService {

  private accessories: Accessory[] = [
    //{name:'jh', description:'hjh', price:4, imagePath:'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', categoryId:'l', subCategoryId:'lf'}
    
    new Accessory(1, 'Denim Shirt', "Long sleave ladie's denim shirt", 980.00, [
      'https://shirtmalaysia.com.my/wp-content/uploads/D03-Long-Sleeve-DenimWomen.jpg',
    ], 'l', 'lb'),

    new Accessory(2, 'A-Line Frock', 'Sleaveless, A-lined frock in violet and red', 3200.00, [
      'https://i.pinimg.com/736x/30/16/f0/3016f05491cea4ae1e9934f0948d8f70--cute-red-dresses-date-dresses.jpg',
      'https://i.pinimg.com/736x/b2/ed/52/b2ed52d8b5a755b82dec4c22bff643cd--ladies-dresses-work-dresses.jpg'
      ], 'l', 'lf'),

    new Accessory(3, "Men's Footware", 'Lacoste INDIANA EVO 316 1 Black - Footware-Men', 2700.00, [
      'https://www.runnerinn.com/f/13645/136455065/lacoste-carnaby-evo-bl-1.jpg',
      'https://photos6.spartoo.eu/photos/376/3764718/3764718_350_A.jpg',
      'https://images.booztx.com/lacoste-shoes/1300b/lacw0018003_cnavy.jpg'
    ], 'g', 'gs'),

    new Accessory(4, "Leather Handbag", 'Leather handbag with double stripes', 1200.00, [
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUWFRUVFhcYFRYYFRUWFRcXGhcXFRgYHSggGB0lHxcXITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGRAQGDcdHx4tLSstKys1LS0tKy0tLS0tLS0tLS0rKy0tLS0tKy0rLS0rLS0tLS0tLS0tLS0xKysuLf/AABEIAOwA1QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQCBQYDB//EAEkQAAIBAgIECQgIAQoHAAAAAAABAgMRBCESMUFRBQYiUmFxgZGhExYycpKx0eEjQmKCssHS8MIHFBUzQ0RTc5OiFzRUY5Sz0//EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAIhEBAQABBAMBAAMBAAAAAAAAAAECAxETURIhMUEiQ3FC/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjKaSu2klrb1IDIGnxPGbDQy8ppv7Cc/FZeJW87qHMq+zH9Rz5Tt14ZdOhBo6PGnDPJylD1oSS7WrrxNvh8RCa0oTjJb4tNeBZZUuNn2PUAFQAAAAAAAAAAAAAAAAAAAAAAAADYNLxm4X8hTSh/WTuo/ZS9KbXRddrXSS3ZZN7tGPDvGGNB6EFp1eb9WF9Tm/wAtb6NZx9WtXxU7PTrS16EcqcN2Xox6279LLHAnBMsTNq7UE71J/Wcnnopv6z1t7L9KO8wWCp0oqFOKjFbFte9va+lmW1z+/G1uOn6nuuSwvFGvLOpVhT+zCLm+92SfYy15lx/6ir3Q/SdWDvjxcXVy7cbX4nVV/V11L7M4W/3Rf8JpsThq+FlpTjKk9SqQfJfW1l2SXYfSzGpBSTTSaas0801uaJdOfizVv77cvwNxovaGIst1VZRfrr6r6Vl1HUpnGcP8XPJJ1aCvDXOnzVtlDo3x7txnxU4Z0XGhOV4Sypyv6L2Qvuezu3DHKy7VcsJZ5YuxATBoxAAAAAAAAAAAAAAAAAAAAABnzjhTEyxGIlKOelJU6S2WTtF9Tbcupnb8P4l08PVknZ6OjF7pT5MX3tHKcUcIpYhO2VKDkut8mPhpdyMtT3ZG2l6lydhwXgY0KcacdUVm9spPNyfS3dlsA1YgAAAACGjgeMfBioVeTlTqXlG31ZfWit2tSXbuO/NNxrwnlMNNr0qf0sd94ZtLrjpLtOM8d4708vGvbi/wh5aipN8pcmfrLb2qz7TZnHcTcRarKGycdJdcGvepeB2JcLvDUx8ctgAHTgAAAAAAAAAAAAAAAAAAHP8AHSrajCPOqxT6oqUvfFFXiNTVq09ulCPdHS/jI47zzox2fSS7VoJfiZY4kL6Kp/mv8FMy/wC239TowAasQAAAAAMKsFJOL1NNPqZmAPnnFmTjWo32NwfbCS99j6Gj5xwRJeVpv/uxffL5n0dGWl8ba32AANWIAAAAAAAAAAABE3ZNvJICtj+EqNBaVarCmnqc5xin1XeZrp8bsCv71Sfqy0/w3OC4yTeKxEq8ZNR0Y06acb2is27aas3K97bo31Zar+i3rc0/uW6tU79OvYZXV9+nox0d5vXeYnj/AEI14U405zpTjdVo3tdNqS0GtKy377rZnexvG6ktDyMfLqU1FuMoxUE7ZvStvT3WzvkfMVSnDR0m6qUo2SpQUstUaairQu0lktbvsVt06jTcGrVVyZweipxnoxb01DK9pReWVmrHHJThm+1bXh/hiliaydKanGFOzaadpyk9KLayutGOou8XOHsNhoTjXrQpt1NKKk+VJaEE3Fa2kclLCeTk6lPNv045JSz1rUoy7k9rWspcM2noSu7Xs8rNbJRakrp707PIky97tLhLj4vpdXj3wfFX/nF/Vp1ZPujA8F/KLwd/i1P/ABsR/wDM+eUOC6b1pv70/wApIsx4Lpc3xn+o65a54I7mf8omBWqVWXVRqL8SRj/xFwW6t/pM4yPBlLmeMvzZl/R1LmLx+I5acEdqv5Q+D9tSoujyFZtd0Gj0p8fuD27eWkuujWiu9wscM+DqXMXiQ+CqPMXfL9Q5acEfQocc8A/71BdelFd7R7R4z4KV9HF0JO17KrBt9SufNXwVS5v+6f6v3c106EI1oxjle+V3a9r7W9il4dJeWpwTt0WBqaMYSeuOhPti1L8j6dConqafUz5lT1PqNDR4NhpSsrPSerRWTzX1LvLR73284Z+LrU0/J9uB8doYCcfQrTj6spK/stdBbpSxUfQxdVWzSvOXhOrZ9p3yxldCvq4OOwPG2pGMVWpadladSMknK1+UqbyV7X9Lbs1LraFZTipRd1JJp701dGkyl+M8sbj9egAK5AAAAOK438cK9Co6GFw3lKiS0qlR2pQ0opqyunUeay0o69ZLdlkt9R2pqOMvCFOnQqxlUhGUoShGLnFSlKUbRUU3dt31HyfHVOFcS71sRJLmRqaEF0aNBcpeu316ihQ4AdKdObcL+Vpt6MLXtKOelk/DeZ3Un42x0b+umppaK7X3tu/j4kSRNL0Yr7MfcgzB6lavRTVinwVwY3iacIScNOUk7Ws+TOS0ltV0unXZo2jRlgaipV6VVptQk5NLN+i1lv1iGXyqXBPC8K3JbiqqinKCmm4tLlddnk8stq2v3xvB0J56K0rNJ57rJuzV7Xulf809HLgrCS+kjUcJN+UTc3GacnpXtfkvoWov4bhmEJRp1KsJOV1Gaas7Z8u2UH05RfRle/45/PaacnF6Msn4PpT/AG1dXsXqcrntWoxmrP5p28H+9WRVo4aakoqzu0otu13KUYpPpvLXqsnq1EdbrKZkZUsLN7r2T17JSUU9W+/Tl1X9IYWbs8lpKDV75+U0tHZ9l+G8m8TePIHpChJxjLK0tWf2tDVs5TS7Vudk6MkrtfVUt70ZOydtivlmNzePCoa2jh4yWIrSgpOh/NnG8mkozqyVWWTs7QjJ2d7q62m1aNe66oqtCV7YieEgmleKjCrLyqm/qpwnJXe57bXsTL49Y8M4df2kSzo0pUIVqeenWnHSTdpRjCL1Xtk28+s10qOCf9ov9X5mwoypKhTo0b6MKlSd83HlqLyk23LlaXVq2FL9iYHtE84o9ER0m53nFz/laH+VD3dJwckVsLw/wlQuqbpVaSk9GFSKTjBXtGMloWyjrbm1fqRphZL7Y6uNynp9XBxGB/lFpqyxeHrYd3s5qMqtG97enGN17NlfWdhgsZTrQVSlONSEleMoSUotdDRvLK8tln17gAqBwvHClo4nS59OLv0pyT8Ld53RyvHuhyaVTdKUH95Jq/seJxqT+LTSu2TmCjwhrj6zfdGT/IuRZUxsbyiumX/rmed7FloxsZyMbEVBKiEjICzwfg6dWbjVk0tG8Vp6Ok7q+byyte3T1mp4SwMJNqMtKMZSUZXupJZJrfq2ZPXtLrMZIJPrUYfEToclrSh/uivs719l9jW3cUqsKkU09JO9t25689tmnnvR4zpJlKph5wenTdntX1ZW1XS96zV+sLstVcO4ejdx5t3lq9Fdiy6FbZE9KFa6yb6bNrNZZ91uwjA45VOS1ozSzi9dtV1zl0rerpGdfC3elHJ5dvWtqt291gj1Unru777u+3b2vve8JWy2ZZbMtRWpVs7PJ7vh0FhMKkmOsEoCxSwdN0ZVXNqpFytHSytGSSi1rbllboe7X4v93d/eY22k3ESRFjJAkokr4R2TW5/B/mWEyrS9Kfre6MV+QR7T3+Pz7X3s6/iPh1HDykl/WVJS69G0M9+cWcZWlZNn0ngnC+So06e2MIp+tblPvuaaX1lr31suAA3eUNVxmw+nhqi2qOmvuPS9yfebUxqQTTT1NNPqZLN4su13fK6bK9ZcuPb+Fr8yy6bjJxeuLcX912Z4VPTj1P3x+J5XuWJGJLBHQiSLEgCCQBFiJRMgBRxeCUs801mmm1JPems0+kxw2PcHoVrLdPJRductUH0+j6u2+zyrUVJWYHtXoqaz33T1NPf1/t3WTrOUqeUs1sl8d3Xq6tRUg50NXKhzfrR9S7V1n6LdtzibOhXhUjdNNP8AdndZO2tPMIRnczRUqYeUM4ZrbHd6vw1a7WyTzpV1L95p7U1sfQFWbkmCZNyjO5CZCAGSZXi+VLrfvZ7XK8PSl1/xSCL3BWH8pXpQ2Oab9WPKfut2n0s4niTh9KtOpzIaK65v4Rfedsb6c9PLrXfLYABoxAAB874x0NDE1FsbUl95Jvxuaafpx6n+OmdXx3oWqU586Li/uu/8Xgcm/TXU/wAdI82U2r26d3xiwCCUcNEgAAAAJAAAAAYThc11bDyg3Om7PbulbUpLb71fJo2phJAeWC4QU3ovkz5vRvjzl471tPTEYVS5Ucpe/o6f3mijjcEpdetNZNNammtvSY4bhGUHo1tWyexX/wARLV6yyzzWuRUWoVWnoyVnn1O21b/fmt5ZUiZwjNZ9D/NZp+K7GVXpU9eced+r46urIC2DzhO5mmFSV16Uuv8ANlhFeKelK2vSdu/IJXd8TcNo0NJ65ycuxcle6/ab8r4HD+TpwhzYxj3KxYPVjNps8GV3toACoAADQ8cqGlh9LmSi+x8n813Hz+3LXqy/FA+rcIYfylOcOdGS7Wsn3nyqS+kXqy98DHUnt6dG+tnsiSCTF6AlGJIAEkASAAJBFxcDIgJgCGitiMOpFkAaanKph3yU5Q5t81vcG9Xq6n0PM3GGxUKsbxaa1PenbU19WXR71ZvCpTuaythJQlp03aW3apJbJLavdssVGwqUXDOOa2rVbq3dWrdbJP0pVk9R44HhJT5MuTNZuL3bXF/WXTs27361cPtjk/B9f7+AHsmWOLuH8piYrYqjk+qF5Z9qS7ShSq7Hk9qOl4h4e9StU5vIXXJ3f4V3nWE3rjUu2NdqAD0vEAAAAAB8y4x4byeLlHY9OS6pOEve2uw+mnD8fYL+cUJbXTqp/dlC34mZ6k9NdG/yc+SYk3MHsSCCSCQY3JAkEACQRcXAyBFxcCbgi4uBJi43JuCjX43AqWepp3TTs01qaa1PpIwnCTi9Ctk9Snkov1ua/B/Z27BlbE4ZSVmgi1VpKWaya27V0e7L4I6ziA7UqsXbS8s5NJ52cY2dta1NdjPnNKvPDu0rypatrlBbvtRW7Wtl/RfS8B4/RrU6kHdSai7O6lCbS1rXrTXSjrC7VnqTfHZ9LAB6XjAAAAAA4nj8/pqHqVPFw+B2xznGrgKpiJU503G8FKLUrpNSs7ppPVbV09BznN4707JlLXE3Fzcvirid0Paf6SPNfE82PtP4GHjenr5Me2muLm5818TzY+18h5r4nmx9p/AeN6OTHtp7kXNz5r4nmx9r5DzWxPNj7XyHhl0cmPbTXFzc+a2J5sfa+Q818TzY+0/gPDLo5Me2nuLm4818TzY+0/gR5r4nmx9p/AeF6OTHtqLi5uPNfE82PtfIea+J5sfafwHjejkx7ae5KZt/NfE82PtfInzXxPNj7XyHhl0cmPbT3Fzcea+J5sfa+Q818TzY+18h4ZdHJj209yTb+a+J5sfa+Q818Tuj7T+A8Mujkx7aaVNPJop8V2ocJ0sMlyJ/SJc2UHVk7dDVPVvOpp8VMQ9egvvP9JuuAOKlHD1HXd513FRc3qjG7ejTj9XNu71u7ztkdY4Xf2z1NSbenRAA3eUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z',
      'http://assets.myntassets.com/assets/images/1629740/2017/1/18/11484732429611-Mast--Harbour-Women-Handbags-2591484732429302-1.jpg',
      'http://media2.newlookassets.com/i/newlook/550332587.jpg'
    ], 'l', 'lh'),

    new Accessory(5, "Kids T-Shirt", 'Printed kids T-Shits', 750.00, [
      'https://s-media-cache-ak0.pinimg.com/originals/44/b1/87/44b187c3a9165ebf2866593f420d81ac.jpg',
      'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/3797530_fpx.tif?op_sharpen=1',
      'https://4.imimg.com/data4/QB/OA/MY-9524907/kids-printed-t-shirt-500x500.jpg',
      'https://res.cloudinary.com/teepublic/image/private/s--Gu3hRznE--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_554/c_crop,g_north_west,h_554,w_416,x_-10,y_0/g_north_west,u_upload:v1446840613:production:blanks:eziiileg5bgruzlxadzh,x_-434,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_285,q_90,w_285/v1452326396/production/designs/391254_1.jpg'
    ], 'k', 'kts'),

    new Accessory(6, "Toddler Shoes", 'Kids sidewalk shoes', 1750.00, [
      'https://s-media-cache-ak0.pinimg.com/originals/3a/b3/57/3ab357ca3fea6f84e2e20f4a663aaf15.jpg',
      'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/547b3d68c93e199cbd048cb886b17ccc/81d4e8be-851d-44a1-af2f-41ec2fb99056.jpg',
      'https://d2jamm6hk8ev18.cloudfront.net/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/h/l/hly-g1w-3501.jpg'
    ], 'k', 'kts'),

    new Accessory(7, "Check Shirt", 'Longsleave cotton shirts', 1750.00, [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuvXPQxDN1NJ1ErhiBjj8W0hk9beSKtDHg9smztGkQzFQX_75',
      'https://static.webshopapp.com/shops/163736/files/077240144/alan-paine-ilkley-gents-shirt.jpg'
    ], 'g', 'gs')

  ]

  constructor() { }

  getAccessories(categoryId: string) {
    let selectedAccessories: Accessory[] = [];

    if(categoryId == "all") {
      selectedAccessories =  this.accessories;
    }
    else {
      for(let i=0; i<this.accessories.length; i++) {
        if(this.accessories[i].categoryId == categoryId) {
          selectedAccessories.push(
            new Accessory(
              this.accessories[i].id,
              this.accessories[i].name,
              this.accessories[i].description,
              this.accessories[i].price,
              this.accessories[i].imagePath,
              this.accessories[i].categoryId,
              this.accessories[i].subCategoryId)
          );
        }
      }
    }  
    return selectedAccessories;
  }

  getAccessory(accessoryId: number) {
    let selectedAccessory;

    for(let i=0; i<this.accessories.length; i++) {
      if(this.accessories[i].id == accessoryId) {
        selectedAccessory = this.accessories[i];
      }
    }
    return selectedAccessory;
  }

}
