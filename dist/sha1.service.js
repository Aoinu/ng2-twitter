import * as jssha from 'jssha';
export var Sha1Service = (function () {
    function Sha1Service() {
        this._jssha = jssha;
    }
    Sha1Service.prototype.getHash = function (key, text) {
        var shaObj = new this._jssha("SHA-1", "TEXT");
        shaObj.setHMACKey(key, "TEXT");
        shaObj.update(text);
        return shaObj.getHMAC("B64");
    };
    return Sha1Service;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NoYTEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPO0FBRTlCO0lBQ0M7UUFFUSxXQUFNLEdBQWdCLEtBQUssQ0FBQztJQUZ0QixDQUFDO0lBSWYsNkJBQU8sR0FBUCxVQUFRLEdBQVUsRUFBQyxJQUFXO1FBQzdCLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUYsa0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyJ9